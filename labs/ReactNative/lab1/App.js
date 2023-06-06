import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView horizontal style={{ marginTop: 100 }}>
      <View style={{ height: 750, width: 400 }}>
        <Image
          source={require("./assets/images/superman.jpg")}
          style={{ width: 500, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400, marginLeft: 150 }}>
        <Image
          source={require("./assets/images/spiderman.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400 , marginLeft: 50}}>
        <Image
          source={require("./assets/images/marvel.png")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400, marginLeft: 50 }}>
        <Image
          source={require("./assets/images/wonderwoman.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
      <View style={{ height: 750, width: 400 , marginLeft: 50}}>
        <Image
          source={require("./assets/images/care.jpg")}
          style={{ width: 400, height: 500 }}
        ></Image>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
