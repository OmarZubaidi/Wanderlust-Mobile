import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../components';

const Stack = createStackNavigator();

function LoginScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default LoginScreen;
