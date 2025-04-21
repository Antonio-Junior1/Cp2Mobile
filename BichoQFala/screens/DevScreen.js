import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DevScreen = ({ navigation }) => {
  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#f5f5f5', '#e8f5e9']}
        style={styles.pageBackground}
      >
        <Header title="DESENVOLVEDORES" />
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.title}>Conheça nossa equipe</Text>
            
            <View style={styles.devContainer}>
              <Image 
                source={{ uri: 'https://img.freepik.com/fotos-gratis/programador-homem-trabalhando-com-codigo_23-2149022641.jpg' }} 
                style={styles.devImage}
              />
              <Text style={styles.devName}>Ana Silva</Text>
              <Text style={styles.devRole}>Desenvolvedora Front-end</Text>
              <Text style={styles.devContact}>ana@bichoqfala.com</Text>
            </View>
            
            <View style={styles.devContainer}>
              <Image 
                source={{ uri: 'https://img.freepik.com/fotos-gratis/programador-trabalhando-com-codigo_23-2149022630.jpg' }} 
                style={styles.devImage}
              />
              <Text style={styles.devName}>Carlos Oliveira</Text>
              <Text style={styles.devRole}>Desenvolvedor Back-end</Text>
              <Text style={styles.devContact}>carlos@bichoqfala.com</Text>
            </View>
            
            <Text style={styles.missionText}>
              Nossa missão é combater os maus tratos animais através da tecnologia, 
              facilitando denúncias e promovendo educação.
            </Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A7D44',
    marginBottom: 25,
    textAlign: 'center',
  },
  devContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  devImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4CC9F0',
    marginBottom: 10,
  },
  devName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  devRole: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  devContact: {
    fontSize: 14,
    color: '#3A7D44',
  },
  missionText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
});

export default DevScreen;