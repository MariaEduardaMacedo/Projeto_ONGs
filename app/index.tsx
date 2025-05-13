import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
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
    backgroundColor: "#F3E5F5",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 140,
    height: 160,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A0072',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6A1B9A',
    marginVertical: 5,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginVertical: 8,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 17,
    color: '#7B1FA2',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  icon: {
    width: 34,
    height: 34,
    marginHorizontal: 12,
  },
  backgroundImage: {
  flex: 1,
  width: '100%',
  height: '100%',
},
overlay: {
  flex: 1,
  backgroundColor: 'rgba(243, 229, 245, 0.85)', // leve roxo claro transparente
},
});


export default IndexScreen;
