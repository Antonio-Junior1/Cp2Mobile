import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MaterialCard from '../components/MaterialCard';

const EducacaoScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configurações da API Petfinder (substitua com suas credenciais)
  const API_KEY = 'ArVgjj8shFk0jWIZChiGIQwqAuJKeKqDLgDX2zcDqe7U20mVK9';
  const API_SECRET = 'ObOW6NGmGc8zV1udZucYuUUhUOhJILwyN9m6MdY1';
  const API_URL = 'https://api.petfinder.com/v2';

  // Dados mockados para fallback
  const getMockArticles = () => [
    {
      id: 1,
      title: "Como Identificar Maus Tratos",
      category: "Guia Prático",
      description: "Aprenda os sinais de que um animal está sofrendo maus tratos",
      image: 'https://www.vereadorafernandamoreno.com.br/wp-content/uploads/2019/10/maus-tratos.jpg',
      externalUrl: 'https://foxvet.com.br/o-que-configura-maus-tratos-aos-animais/'
    },
    {
      id: 2,
      title: "Direitos dos Animais no Brasil",
      category: "Legislação",
      description: "Conheça a legislação brasileira sobre proteção animal",
      image: 'https://atanews.com.br/images/colunas/224/24033237_animal_jui.jpg',
      externalUrl: 'https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/direitos-animais'
    },
    {
      id: 3,
      title: "Primeiros Socorros para Animais",
      category: "Saúde",
      description: "Aprenda procedimentos básicos para emergências",
      image: 'https://blog.polipet.com.br/wp-content/uploads/2023/06/emercia.jpeg',
      externalUrl: 'https://www.petlove.com.br/dicas/primeiros-socorros-para-caes-e-gatos'
    },
    {
      id: 4,
      title: "Adoção Responsável",
      category: "Guia Completo",
      description: "Tudo o que você precisa saber antes de adotar um animal",
      image: 'https://sindilojas-sp.org.br/wp-content/uploads/2018/07/Ado%C3%A7%C3%A3o-de-Animais-750x442.png',
      externalUrl: 'https://www.amigonaosecompra.com.br'
    }
  ];

  
  const handleOpenExternalLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir este link');
      }
    } catch (error) {
      Alert.alert('Erro', `Ocorreu um erro: ${error.message}`);
    }
  };

  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        
        const authResponse = await axios.post(`${API_URL}/oauth2/token`, {
          grant_type: 'client_credentials',
          client_id: API_KEY,
          client_secret: API_SECRET
        });

        const token = authResponse.data.access_token;

        
        const response = await axios.get(`${API_URL}/animals`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            type: 'dog', 
            page: 1,
            limit: 4
          }
        });

        
        const formattedArticles = response.data.animals.map(animal => ({
          id: animal.id,
          title: animal.name || 'Artigo Educativo',
          category: animal.type ? `Tipo: ${animal.type}` : 'Cuidados',
          description: animal.description || 'Informações importantes sobre cuidados com animais',
          image: animal.photos[0]?.medium || 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg',
          externalUrl: animal.url || 'https://www.petfinder.com'
        }));

        setArticles(formattedArticles);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError('Falha ao carregar os artigos. Mostrando conteúdo local...');
        setLoading(false);
        setArticles(getMockArticles());
      }
    };

    fetchArticles();
  }, []);

  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#f5f5f5', '#e8f5e9']}
        style={styles.pageBackground}
      >
        <Header title="Área de adoção" />

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.sectionTitle}>Adote e ajude!</Text>

            {error && (
              <Text style={styles.errorText}>{error}</Text>
            )}

            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3A7D44" />
                <Text style={styles.loadingText}>Carregando conteúdo...</Text>
              </View>
            ) : (
              <FlatList
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <MaterialCard
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                    onPress={() => handleOpenExternalLink(item.externalUrl)}
                  />
                )}
                contentContainerStyle={styles.listContent}
              />
            )}
          </View>
        </ScrollView>

        <Footer navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  pageBackground: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 80,
    paddingTop: 20,
  },
  contentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A7D44',
    marginBottom: 24,
    textAlign: 'center',
  },
  loadingContainer: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 16,
    color: '#555',
    fontSize: 16,
  },
  errorText: {
    color: '#FF6B35',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default EducacaoScreen;