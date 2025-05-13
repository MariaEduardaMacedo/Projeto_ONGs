import React from "react";
import { TouchableOpacity, Text, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from './navigation';

export default function AboutScreen()  {
      const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/images/mascote.png")} style={styles.logo} />
      <Text style={styles.title}>CAJEC</Text>
      <Text style={styles.subtitle}>Sobre nós</Text>
      <Text style={styles.description}>
        A CAJEC foi fundada em 1996 por Maria Luiza Centelles, mas sua história
        remonta a anos antes, quando ela informalmente hospedava crianças e
        adolescentes em sua casa para tratamento de câncer.
      </Text>
      <Text style={styles.description}>
        Em 1995, Maria Luiza perdeu o jovem José Eduardo Cavichia, que sonhava
        em construir uma casa de apoio para crianças e adolescentes com câncer.
      </Text>
      <Text style={styles.description}>
        Inspirada por ele, ela fundou a CAJEC em sua homenagem. Inicialmente, a
        CAJEC funcionava na casa de Maria Luiza, mas depois de buscar ajuda de
        empresas e amigos, ganhou um sobrado que acabou sendo comprado e hoje é
        a sede da instituição.
      </Text>
      <TouchableOpacity style = {styles.button}
         onPress={() => navigation.navigate('index')}>
        <Text style={styles.buttonText}>Ir para página inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F3E5F5", 
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A0072',
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A0072',
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  description: {
    color: '#7B1FA2',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 20,
    padding: 10,
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
    color: '#4A0072',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


