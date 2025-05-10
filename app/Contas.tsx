import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation";

const FinancialReportScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFC107",
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6A1B9A",
  },
});

export default FinancialReportScreen;
