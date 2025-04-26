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
        <Text>Ir para página inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#A020F0',
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#8B008B',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
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
    fontSize: 16,
    color: '#555',
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
