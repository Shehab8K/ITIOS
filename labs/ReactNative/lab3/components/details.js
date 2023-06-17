import { useRoute } from '@react-navigation/native';
import {  Text, View } from 'react-native';
export default function DetailsScreen() {
    const {params}=useRoute()
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{params.name}</Text>
    <Text>{params.email}</Text>
    <Text>{`${params.address.city} ${params.address.street} ${params.address.suite}`}</Text>
    <Text>{params.phone}</Text>
    </View>
);
}