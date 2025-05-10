import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
      <TouchableOpacity onPress={() => navigation.navigate("index")}>
        <Text>Voltar à tela inicial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 24,
  },
});

export default MissionValuesScreen;
