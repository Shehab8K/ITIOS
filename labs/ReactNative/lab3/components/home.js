import { useContext } from 'react';
import {  FlatList, Pressable, Text, View } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';
import styles from '../styles';
export default function HomeScreen({navigation}) {    
const {users}=useContext(usersContext)
return (
    
        <FlatList data={users}
        keyExtractor={user=>user.id}
        renderItem={(user)=>(
            <View style={styles.flex}>
                <Text>{user.item.name}</Text>
                <Pressable  style={styles.btnContainer} onPress={() => navigation.navigate('Details',user.item)}>
                    <Text>Show Details</Text>
                </Pressable>
            </View>)}>
        </FlatList>
);
}