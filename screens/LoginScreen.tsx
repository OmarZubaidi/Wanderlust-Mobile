import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../components';

const Stack = createStackNavigator();

interface IProps {
  setUserEmail: Function;
}

function LoginScreen({ setUserEmail }: IProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        component={Login}
        initialParams={{ setUserEmail }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default LoginScreen;
