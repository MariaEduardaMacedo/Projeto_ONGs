import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VolunteerRegistrationScreen from './cadastro';
import IndexScreen from './index';
import CadastroDoacao from './donnation'
import AboutScreen from './SobreNos';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={IndexScreen} />
        <Stack.Screen name="cadastro" component={VolunteerRegistrationScreen} />
        <Stack.Screen name="donnation" component={CadastroDoacao} />
        <Stack.Screen name = "SobreNos" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
    index: undefined;
    cadastro: undefined;
    donnation: undefined;
    SobreNos: undefined;
  };
  
  const Stack2 = createStackNavigator<RootStackParamList>();