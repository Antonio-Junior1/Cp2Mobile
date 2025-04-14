import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DenunciaScreen = ({ navigation }) => {
  const [tipoAnimal, setTipoAnimal] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = () => {
    if (!tipoAnimal || !localizacao || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    Alert.alert('Sucesso', 'Denúncia registrada com sucesso!');
    setTipoAnimal('');
    setLocalizacao('');
    setDescricao('');
  };

  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#f5f5f5', '#e8f5e9']}
        style={styles.pageBackground}
      >
        <Header title="FAZER DENÚNCIA" />
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.title}>Denuncie maus tratos</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Tipo de Animal*</Text>
              <TextInput
                style={styles.input}
                value={tipoAnimal}
                onChangeText={setTipoAnimal}
                placeholder="Cachorro, gato, cavalo, etc."
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Localização*</Text>
              <TextInput
                style={styles.input}
                value={localizacao}
                onChangeText={setLocalizacao}
                placeholder="Onde está ocorrendo o problema?"
              />
            </View>
            
            <View style={styles.formGroup}>
              <Text style={styles.label}>Descrição*</Text>
              <TextInput
                style={[styles.input, styles.multilineInput]}
                value={descricao}
                onChangeText={setDescricao}
                placeholder="Descreva a situação com detalhes"
                multiline
                numberOfLines={4}
              />
            </View>
            
            <TouchableOpacity 
              style={styles.addPhotoButton}
              onPress={() => Alert.alert('Aviso', 'Funcionalidade de adicionar foto será implementada')}
            >
              <Text style={styles.buttonText}>+ Adicionar Fotos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>ENVIAR DENÚNCIA</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#3A7D44',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
    color: '#555',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  multilineInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  addPhotoButton: {
    backgroundColor: '#4CC9F0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#3A7D44',
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

export default DenunciaScreen;