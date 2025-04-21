import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VolunteerRegistrationScreen from './cadastro';
import IndexScreen from './index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={IndexScreen} />
        <Stack.Screen name="cadastro" component={VolunteerRegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type RootStackParamList = {
    IndexScreen: undefined;
    cadastro: undefined;
  };
  
  const Stack2 = createStackNavigator<RootStackParamList>();