import { StyleSheet, Text, View } from "react-native";

function TitelSingUp(){
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>SmartWallet</Text>
      <Text style={styles.h1}>Olá, seja bem vindo!</Text>
      <Text style={styles.h2}>Vamos melhorar o seu controle financeiro!</Text>
      <Text style={styles.h1Especial}>Cadastre-se</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    padding: 15,
  },

  logo: {
    fontSize: 32,
    marginBottom: 15,
    textAlign: 'center',
    color: '#1E232E',
  },

  h1: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },

  h2: {
    color: '#1E232E',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 20,
  },

  h1Especial: {
    color: '#162E25',
    fontSize: 32,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})

export default TitelSingUp;
