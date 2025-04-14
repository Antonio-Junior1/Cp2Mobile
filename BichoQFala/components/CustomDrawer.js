import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.title}>BICHOQFALA</Text>
        <Text style={styles.subtitle}>Protegendo os animais</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={20} color="#3A7D44" />
          <Text style={styles.menuText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Denuncia')}
        >
          <Ionicons name="alert-circle" size={20} color="#FF6B35" />
          <Text style={styles.menuText}>Fazer Denúncia</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Educacao')}
        >
          <Ionicons name="book" size={20} color="#3A7D44" />
          <Text style={styles.menuText}>Educação Animal</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Ionicons name="person" size={20} color="#3A7D44" />
          <Text style={styles.menuText}>Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Dev')}
        >
          <Ionicons name="code" size={20} color="#4CC9F0" />
          <Text style={styles.menuText}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Versão 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  menu: {
    flex: 1,
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#2D2D2D',
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
  },
});

export default CustomDrawer;