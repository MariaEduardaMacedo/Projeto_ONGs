import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';

const PrivacyPolicyScreen = () => {
        const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); 
  return (
    <View style={styles.container}>
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
              <Text>Ir para página inicial</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A1B9A", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 15,
  },
  body: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFC107", 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6A1B9A",
  },
});

export default PrivacyPolicyScreen;
