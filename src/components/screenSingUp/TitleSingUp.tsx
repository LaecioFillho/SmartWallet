import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function TitelSingUp(){
  return(
    <View style={styles.container}>
      <Fontisto style={styles.iconLogo} name="wallet" size={32}/>
      <Text style={styles.logo}>SmartWallet</Text>
      <Text style={styles.h1}>Olá, seja bem vindo!</Text>
      <Text style={styles.h2}>Vamos melhorar o seu controle financeiro!</Text>
      <Text
        style={styles.h1Especial}>
          Cadastre-se <FontAwesome name="user-plus" size={28}/>
      </Text>
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
    marginTop: 15,
  },

  h1: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
  },

  h2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
  },

  h1Especial: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',

  },
})

export default TitelSingUp;
