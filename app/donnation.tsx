import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from './navigation';

export default function CadastroDoacao() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [tipoDoacao, setTipoDoacao] = useState('');
  const [busca, setBusca] = useState('sim');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro para doações</Text>

      <Text style={styles.label}>Nome*</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo..."
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Telefone*</Text>
      <TextInput
        style={styles.input}
        placeholder="( ) _ _ _ _ _ _ _ _ _"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail..."
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Tipo de doação</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={tipoDoacao}
          onValueChange={(itemValue) => setTipoDoacao(itemValue)}
        >
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Roupas" value="roupas" />
          <Picker.Item label="Alimentos" value="alimentos" />
          <Picker.Item label="Dinheiro" value="dinheiro" />
          <Picker.Item label="Outros" value="outros" />
        </Picker>
      </View>

      <Text style={styles.label}>Precisa que o CAJEC busque?</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity onPress={() => setBusca('sim')}>
          <Text style={busca === 'sim' ? styles.radioSelected : styles.radio}>◉ Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBusca('nao')}>
          <Text style={busca === 'nao' ? styles.radioSelected : styles.radio}>◯ Não</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/*Botão de volta para tela iniclal*/}
      <TouchableOpacity style = {styles.button}
      onPress = {() => navigation.navigate('index')}>
        <Text style={styles.buttonText}>Ir para página inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
    color: '#4A0072',
  },
  label: {
    fontSize: 20,
    color: '#4B0082',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#4B0082',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 20,
  },
  radio: {
    fontSize: 20,
    color: '#4B0082',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  radioSelected: {
    fontSize: 16,
    color: '#8B008B',
    fontWeight: 'bold',
  },
  qrCode: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
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
    color: '#7B1FA2',
    fontSize: 17,
    fontWeight: 'bold'
  },
});
