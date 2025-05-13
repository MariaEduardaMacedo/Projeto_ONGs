import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from './navigation';


const VolunteerRegistrationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [area, setArea] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Voluntário</Text>
      <Text style={styles.label}>Área de Atuação</Text>
      <Picker
        selectedValue={area}
        style={styles.input}
        onValueChange={(itemValue) => setArea(itemValue)}
      >
        <Picker.Item label="Selecione uma opção" value="" />
        <Picker.Item label="Atendimento" value="Atendimento" />
        <Picker.Item label="Eventos" value="Eventos" />
      </Picker>

      {/* Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={name}
        onChangeText={setName}
      />

      {/* Telefone */}
      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="(XX) XXXXX-XXXX"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Email */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Disponibilidade */}
      <Text style={styles.label}>Disponibilidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Segunda a sexta (manhã)"
        value={availability}
        onChangeText={setAvailability}
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/*Botão tela inicial */}
      <TouchableOpacity style = {styles.button}
       onPress={() => navigation.navigate('index')}>
        <Text style={styles.buttonText}>Ir para página inicial</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A0072',
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: 'center',
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

export default VolunteerRegistrationScreen;
