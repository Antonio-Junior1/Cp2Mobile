import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialCard from '../components/MaterialCard';

const EducacaoScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setTimeout(() => {
          const mockData = [
            {
              id: 1,
              title: "Como Identificar Maus Tratos",
              category: "Guia Prático",
              description: "Aprenda os sinais de que um animal está sofrendo maus tratos e como agir.",
              image: 'https://img.freepik.com/fotos-gratis/veterinario-examinando-cao-doente_23-2149011305.jpg',
            },
            {
              id: 2,
              title: "Direitos dos Animais no Brasil",
              category: "Legislação",
              description: "Conheça a legislação brasileira sobre proteção animal e seus direitos.",
              image: 'https://img.freepik.com/fotos-gratis/advogado-com-documentos_23-2148884660.jpg',
            }
          ];
          setArticles(mockData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
        setLoading(false);
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
        <Header title="EDUCAÇÃO ANIMAL" />
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.sectionTitle}>Materiais Educativos</Text>
            
            {loading ? (
              <Text style={styles.loadingText}>Carregando materiais...</Text>
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
                  />
                )}
                contentContainerStyle={styles.listContent}
              />
            )}
            
            <TouchableOpacity 
              style={styles.moreButton}
              onPress={() => navigation.navigate('Perfil')}
            >
              <Text style={styles.moreButtonText}>VER MAIS MATERIAIS</Text>
            </TouchableOpacity>
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
    paddingBottom: 70,
    paddingTop: 15,
  },
  contentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A7D44',
    marginBottom: 20,
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
    padding: 20,
  },
  listContent: {
    paddingBottom: 10,
  },
  moreButton: {
    backgroundColor: '#FF6B35',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  moreButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EducacaoScreen;