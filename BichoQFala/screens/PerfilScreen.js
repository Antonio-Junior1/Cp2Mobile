import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PerfilScreen = ({ navigation }) => {
  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#f5f5f5', '#e8f5e9']}
        style={styles.pageBackground}
      >
        <Header title="MEU PERFIL" />
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <View style={styles.profileHeader}>
              <Image 
                source={{ uri: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-bonito-e-sorridente_23-2149022627.jpg' }} 
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.name}>Usuário BICHOQFALA</Text>
                <Text style={styles.email}>usuario@bichoqfala.com</Text>
              </View>
            </View>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Denúncias</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Resolvidos</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Denuncia')}
            >
              <Text style={styles.buttonText}>NOVA DENÚNCIA</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Educacao')}
            >
              <Text style={styles.buttonText}>MATERIAIS EDUCATIVOS</Text>
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#3A7D44',
  },
  profileInfo: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A7D44',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#3A7D44',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: '#4CC9F0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PerfilScreen;