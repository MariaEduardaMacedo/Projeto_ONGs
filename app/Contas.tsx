import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation";

const FinancialReportScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CAJEC</Text>
      <Text style={styles.subtitle}>Prestação de Contas</Text>
      <Text style={styles.body}>
        Aqui está um resumo das últimas doações e como foram utilizadas para
        apoiar nossas atividades e beneficiar aqueles que precisam.
      </Text>
      <Text style={styles.sectionTitle}>Entradas:</Text>
      <Text style={styles.listItem}>Doações: R$ 10.000,00</Text>
      <Text style={styles.listItem}>Eventos: R$ 5.000,00</Text>

      <Text style={styles.sectionTitle}>Saídas:</Text>
      <Text style={styles.listItem}>Alimentos e insumos: R$ 6.000,00</Text>
      <Text style={styles.listItem}>Material educacional: R$ 3.000,00</Text>
      <Text style={styles.listItem}>Outros custos: R$ 2.000,00</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
        <Text style={styles.buttonText}>Voltar à tela inical</Text>
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
  sectionTitle: {
    color: '#7B1FA2',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 20,
    padding: 10,
  },
  listItem: {
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

export default FinancialReportScreen;
