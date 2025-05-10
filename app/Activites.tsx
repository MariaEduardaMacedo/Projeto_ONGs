import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';

const activities = [
  { id: '1', title: 'Aulas de dança adaptada', date: '08/05', time: '15:00 Hrs' },
  { id: '2', title: 'Aulas de culinária simples', date: '15/05', time: '11:00 Hrs' },
  { id: '3', title: 'Sessão de cinema com pipoca e debates', date: '23/05', time: '14:00 Hrs' },
];

const AtividadesScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades Recreativas do Mês</Text>

      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityCard}>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activityDetail}>Data: {item.date}</Text>
            <Text style={styles.activityDetail}>Horário: {item.time}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => alert('Cadastro de voluntário em desenvolvimento!')}>
        <Text style={styles.buttonText}>Quero me voluntariar!</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
            <Text style={styles.buttonText}>Voltar à página inicial</Text> 
        </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6A1B9A',
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  activityDetail: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#8E24AA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default AtividadesScreen;
