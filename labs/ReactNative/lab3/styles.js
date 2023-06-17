import {StyleSheet} from "react-native"
export default StyleSheet.create( {
    container: {
      marginTop: Platform.OS === "android" ? 40 : 0,
    //   backgroundColor: "magenta",
      height: "100%",
      marginHorizontal:10
    
      
    },
    flex:{
      marginVertical:10,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    header:{
        fontSize:19,
        fontWeight:'bold',
        backgroundColor:"steelblue",
        color:"white",
        padding:15
    },
    itemStyle:{
      backgroundColor:"skyblue",
      margin:5,
      padding:6,
    },
    btnContainer:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#6c71c4",
      borderRadius:10,
      paddingHorizontal:20,
      marginStart:30,
      height:40
    
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