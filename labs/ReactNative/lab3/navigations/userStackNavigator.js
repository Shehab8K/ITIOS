import {  Text, View } from 'react-native';
import HomeScreen from "../components/home"
import DetailsScreen from "../components/details"

import styles from "../styles"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersContextProvider from '../contexts/usersContextProvider';

const Stack=createNativeStackNavigator()
export default function UserStackNavigation() {
    return (
    <UsersContextProvider test="mahmoud">
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    </UsersContextProvider>
    );
}