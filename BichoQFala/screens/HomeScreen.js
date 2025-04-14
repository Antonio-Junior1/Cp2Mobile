import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#f5f5f5', '#e8f5e9']}
        style={styles.pageBackground}
      >
        <Header title="BICHOQFALA" />
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <Image 
              source={{ uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' }} 
              style={styles.image}
            />
            
            <Text style={styles.welcomeText}>Seja a Voz dos Animais</Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, styles.primaryButton]}
                onPress={() => navigation.navigate('Denuncia')}
              >
                <Text style={styles.buttonText}>FAZER DENÚNCIA</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.button, styles.secondaryButton]}
                onPress={() => navigation.navigate('Educacao')}
              >
                <Text style={styles.buttonText}>EDUCAÇÃO ANIMAL</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.infoText}>
              Ajude a proteger os animais denunciando maus-tratos e aprendendo sobre seus direitos.
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#3A7D44',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: '#3A7D44',
  },
  secondaryButton: {
    backgroundColor: '#FF6B35',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default HomeScreen;