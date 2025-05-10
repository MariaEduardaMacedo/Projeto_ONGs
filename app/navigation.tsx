import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VolunteerRegistrationScreen from './cadastro';
import IndexScreen from './index';
import CadastroDoacao from './donnation'
import AboutScreen from './SobreNos';
import MissionValuesScreen from './MissionValues';
import AtividadesScreen from './Activites';
import PrivacyPolicyScreen from './Terms';
import FinancialReportScreen from './Contas';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={IndexScreen} />
        <Stack.Screen name="cadastro" component={VolunteerRegistrationScreen} />
        <Stack.Screen name="donnation" component={CadastroDoacao} />
        <Stack.Screen name= "SobreNos" component={AboutScreen} />
        <Stack.Screen name= "MissionValues" component={MissionValuesScreen}/>
        <Stack.Screen name="Activites" component={AtividadesScreen} />
        <Stack.Screen name="Terms" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Contas" component={FinancialReportScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type RootStackParamList = {
    index: undefined;
    cadastro: undefined;
    donnation: undefined;
    SobreNos: undefined;
    MissionValues : undefined;
    Activites: undefined;
    Terms: undefined;
    Contas: undefined;
  };
  
  const Stack2 = createStackNavigator<RootStackParamList>();