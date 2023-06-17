import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View  , ScrollView,Image,
  SectionList,} from 'react-native';
import Root from "./navigations/root"

// import {styles} from "./styles"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Root></Root>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create( {
  container: {
    marginTop: Platform.OS === "android" ? 40 : 0,
  //   backgroundColor: "magenta",
    height: "100%",
    marginHorizontal:10
  
    
  },
  
  header:{
      fontSize:19,
      fontWeight:'bold',
      backgroundColor:"steelblue",
      color:"white",
      padding:15
  },
  itemStyle:{
    // backgroundColor:"skyblue",
    margin:5,
    padding:6,
    marginVertical:10

  },
  btnContainer:{
    backgroundColor:"#6c71c4",
    borderRadius:10,
    padding:10,
    marginHorizontal:50,
  
  },
  txt:{
    color:"white",
    fontSize:20,
    textAlign:"center"
  },
  largeBoxStyle: {
    backgroundColor: "yellow",
    width: 500,
    height: 500,
    // ,zIndex:1
  },
  miniBox: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 50,
    left: 50,
    //   margin:50,
    marginHorizontal:20,
    marginVertical:60
  },
});
