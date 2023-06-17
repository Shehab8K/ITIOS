import { NavigationContainer } from '@react-navigation/native';
import ContactScreen from "../components/contact"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import styles from "../styles"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserStackNavigation from './userStackNavigator';
import ToDoList from '../components/todo';


const Tap = createMaterialTopTabNavigator();
const Stack=createNativeStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Tap.Navigator>
          <Tap.Screen name="Contact" component={ContactScreen} />
          <Tap.Screen name="ToDoList" component={ToDoList} />
          <Tap.Screen name="Users" component={UserStackNavigation} />
        </Tap.Navigator>
      </NavigationContainer>
  );
}