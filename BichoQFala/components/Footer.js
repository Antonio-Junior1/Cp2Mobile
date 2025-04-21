import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" size={24} color="#3A7D44" />
        <Text style={styles.footerText}>Início</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Denuncia')}
      >
        <Ionicons name="alert-circle" size={24} color="#FF6B35" />
        <Text style={styles.footerText}>Denúncia</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Educacao')}
      >
        <Ionicons name="book" size={24} color="#3A7D44" />
        <Text style={styles.footerText}>Educação</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Ionicons name="person" size={24} color="#3A7D44" />
        <Text style={styles.footerText}>Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.navigate('DevScreen')}
      >
        <Ionicons name="code" size={24} color="#3A7D44" />
        <Text style={styles.footerText}>Devs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,  // Reduzido para caber 5 itens
    minWidth: 60,         // Ajustado para melhor espaçamento
  },
  footerText: {
    color: '#555',
    fontSize: 10,         // Reduzido para caber mais itens
    marginTop: 4,
    textAlign: 'center',
  },
});

export default Footer;