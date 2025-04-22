import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  ScrollView, 
  ActivityIndicator,
  Linking,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialCard from '../components/MaterialCard';

const EducacaoScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const mockArticles = [
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
    const timer = setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#f5f5f5', '#e8f5e9']}
        style={styles.pageBackground}
      >
        <Header title="EDUCAÇÃO ANIMAL" />
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.sectionTitle}>Materiais Educativos</Text>
            
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
  listContent: {
    paddingBottom: 10,
  },
});

export default EducacaoScreen;