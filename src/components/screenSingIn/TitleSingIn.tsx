import { StyleSheet, Text, View } from "react-native";

function TitelSingIn(){
  return(
    <View style={styles.container}>
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
    marginTop: 45,
    marginBottom: 15,
    textAlign: 'center',
    color: '#e2cb92',
  },

  h1: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
    marginTop: 20,
  },

  h1Extra:{
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
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

export default TitelSingIn;
