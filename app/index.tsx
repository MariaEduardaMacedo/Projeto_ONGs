import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from './navigation';

const IndexScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cabeçalho com o logo */}
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../assets/images/mascote.png')}></Image>
          <Text style={styles.title}>CAJEC</Text>
        </View>
        {/* Texto informativo */}
        <Text style={styles.subtitle}>#FAÇA PARTE</Text>
        <Text style={styles.subtitle}>JUNTOS contra o câncer infantojuvenil</Text>
        {/* Botões */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.buttonText}>Quero ser voluntário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.buttonText} 
          onPress={() => navigation.navigate('donnation')}>Quero doar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
          onPress={() => navigation.navigate('SobreNos')}
          >Sobre nós</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
          onPress={() => navigation.navigate('MissionValues')}
          >Missões e Valores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
          onPress={() => navigation.navigate('Activites')}
          >Atividades do Mês</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}
          onPress={() => navigation.navigate('Contas')}
          >Prestação de Contas </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.buttonText}>Termos e Condições</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Image source={require('../assets/images/instagram.png')} style={styles.icon} />
          <Image source={require('../assets/images/facebook.png')} style={styles.icon} />
          <Image source={require('../assets/images/youtube.png')} style={styles.icon} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#6A1B9A",
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 150,
    height: 170,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#D1A1D1',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default IndexScreen;
