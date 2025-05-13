import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';

const PrivacyPolicyScreen = () => {
        const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); 
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CAJEC</Text>
      <Text style={styles.subtitle}>
        Termo de consciência e Política de privacidade
      </Text>
      <Text style={styles.body}>
        A ONG respeita a sua privacidade e está comprometida em proteger as suas
        informações pessoais. Esta política de privacidade descreve como
        coletamos, usamos, armazenamos e protegemos os dados fornecidos por você
        durante o cadastro como voluntário e/ou ao realizar doações. Ao se
        cadastrar como voluntário ou realizar uma doação, você concorda com os
        termos desta política de privacidade.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Obrigada por confiar na cajec')}>
        <Text style={styles.buttonText}>Li e estou de acordo</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button}
            onPress = {() => navigation.navigate('index')}>
              <Text style={styles.buttonText}>Ir para página inicial</Text>
            </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F3E5F5", // Cor roxa do fundo
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
  body: {
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

export default PrivacyPolicyScreen;
