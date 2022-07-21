import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/Home';
import DetailsScreen from './Screen/Detail';
import Header from './components/Header';
import HeaderDetail from './components/HeaderDetail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: (props) => <Header {...props}/>
            }} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerTitle: (props) => <HeaderDetail {...props}/>
            }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}