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
    backgroundColor: "#6A0DAD", // Cor roxa do fundo
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4B0082',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});


