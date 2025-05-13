import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation";

const MissionValuesScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Missão e Valores</Text>
      <Text style={styles.description}>
        Nós ajudamos crianças e adolescentes carentes com câncer e/ou transplantados de todo o Brasil e alguns países da América Latina.
      </Text>
      <Text style={styles.description}>
        Oferecemos apoio gratuito e completo para que recebam o tratamento necessário nos hospitais públicos de São Paulo e acompanhamento durante todo o período de intervenção.
      </Text>
      <Text style={styles.description}>
        Nosso propósito é oferecer uma estadia acolhedora e digna aos assistidos, proporcionando carinho e suporte para que se sintam em casa, mesmo estando longe de suas famílias.
      </Text>
      <Text style={styles.description}>
        Além disso, nosso ambiente e atendimento excepcionais contribuem para o sucesso do tratamento.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("index")}
        style={styles.button}>
        <Text style={styles.buttonText}>Voltar à tela inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    padding: 20,

  },
  title: {
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
    fontSize: 17,
    color: '#7B1FA2',
    fontWeight: '600',
  },
});

export default MissionValuesScreen;
