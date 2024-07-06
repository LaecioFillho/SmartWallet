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
    marginTop: 5,
    padding: 15,
  },

  logo: {
    fontSize: 46,
    marginTop: 45,
    marginBottom: 15,
    textAlign: 'center',
    color: '#e2cb92',
  },

  h1: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
  },

  h2: {
    color: '#f0e2be',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
  },

  h1Especial: {
    color: '#f0e2be',
    fontSize: 32,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})

export default TitelSingUp;
