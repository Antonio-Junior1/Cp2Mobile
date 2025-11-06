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
                source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQG4PMfN4C_UGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711836709694?e=1750896000&v=beta&t=M8_OcqcRcGzrUo--dPxmKC3lWCxPjyh8XxwYUZojOrg' }} 
                style={styles.devImage}
              />
              <Text style={styles.devName}>Antônio Junior</Text>
              <Text style={styles.devRole}>Desenvolvedor Front-end</Text>
              <Text style={styles.devContact}>antonio@bichoqfala.com</Text>
            </View>

            <View style={styles.devContainer}>
              <Image 
                source={{ uri: 'https://media.licdn.com/dms/image/v2/D4E35AQEfVQ2sOSngtQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1723386836636?e=1747256400&v=beta&t=XCY2Ommd8CfgoZgx7BvpvVgwcmNd1aezAnPFpopAo3k' }} 
                style={styles.devImage}
              />
              <Text style={styles.devName}>Caio Carnetti</Text>
              <Text style={styles.devRole}>Desenvolvedor Full Stack</Text>
              <Text style={styles.devContact}>caiocarnetti@bichoqfala.com</Text>
            </View>
            
            <View style={styles.devContainer}>
              <Image 
                source={{ uri: 'https://media.licdn.com/dms/image/v2/D4E35AQGbbAshHPPCSg/profile-framedphoto-shrink_200_200/B4EZXJ3134GgAc-/0/1742848614287?e=1747256400&v=beta&t=2fFC818seqWrc7bhYK40S1X1sGVWuvFathOG2B0makU' }} 
                style={styles.devImage}
              />
              <Text style={styles.devName}>Carlos Eduardo</Text>
              <Text style={styles.devRole}>Desenvolvedor Back-end</Text>
              <Text style={styles.devContact}>carlos@bichoqfala.com</Text>
            </View>

            {/* <View style={styles.devContainer}>
              <Image 
                source={{ uri: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.pnghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpub%2Fdir%2FCaio%2FSilva%2BTeixeira%3Ftrk%3Dpublic_profile_samename-see-all&psig=AOvVaw3O2CRGejhOielEYzRcVztp&ust=1745456433983000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCXm4f67IwDFQAAAAAdAAAAABAEhttps://media.licdn.com/dms/image/v2/D4E35AQEfVQ2sOSngtQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1723386836636?e=1745978400&v=beta&t=D365nnVuRy5LspFHajUZr7Za0ax0CsFUiCrOa2Il8HE' }} 
                style={styles.devImage}
              />
              <Text style={styles.devName}>Caio Carnetti</Text>
              <Text style={styles.devRole}>Marketing</Text>
              <Text style={styles.devContact}>caio@bichoqfala.com</Text>
            </View>
             */}
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