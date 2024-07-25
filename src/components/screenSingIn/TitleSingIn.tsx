import { Fontisto } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function TitelSingIn(){
  return(
    <View style={styles.container}>
      <Fontisto style={styles.iconLogo} name="wallet" size={32}/>
      <Text style={styles.logo}>SmartWallet</Text>
      <Text style={styles.h1}>Olá,</Text>
      <Text style={styles.h1Extra}>Como foi o dia hoje?</Text>
      <Text style={styles.h2}>Entra na sua conta, vamos se organizar!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 15,
  },

  logo: {
    fontSize: 46,
    marginBottom: 15,
    textAlign: 'center',
    color: '#25f586',
  },

  iconLogo: {
    fontSize: 46,
    textAlign: 'center',
    color: '#25f586',
    marginTop: 30,
  },

  h1: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
    marginTop: 10,
  },

  h1Extra:{
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },

  h2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 5,
    marginBottom: 65,
  },

  h1Especial: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})

export default TitelSingIn;
