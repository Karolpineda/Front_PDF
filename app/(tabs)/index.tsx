import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Image
            source={require('../../assets/images/perfil.png')}
            style={styles.avatarImage}
            resizeMode="cover"
          />

        </View>
      </View>
      {/* Nombre y email */}
      <Text style={styles.name}>Karol Pineda</Text>
      <Text style={styles.email}>kmpinedaq@uce.edu.ec</Text>
      {/* Sección inferior verde */}
      
      <View style={styles.bottomSection}>
        {/* Recuadro de descripción */}
        <Text style={styles.name}>Dispositivos móviles</Text>
        <View style={styles.descriptionBox}>
        <Text style={styles.name}>Quien soy</Text>
          <Text style={styles.descriptionText}>Soy estudiante de sistemas
            Tengo 20 años, me gusta la programación y el deporte.
          </Text>
        </View>
        {/* Botón Log Out */}
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 40,
    marginBottom: 16,
    alignItems: 'center',
  },
  avatarCircle: {
    backgroundColor: '#f2f2f2',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
 
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
  },
  bottomSection: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(232, 225, 242)',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
  },

  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  descriptionBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(145, 89, 224)',
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  descriptionText: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
  },
});