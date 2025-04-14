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
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    paddingHorizontal: 5,
  },
  footerText: {
    color: '#555',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Footer;