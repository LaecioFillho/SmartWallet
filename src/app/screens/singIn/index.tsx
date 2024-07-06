import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import TitelSingIn from "@/components/screenSingIn/TitleSingIn";
import InputSingIn from "@/components/screenSingIn/InputSingIn";
import { useProductDatabase, userWallet } from "@/database/useProductDatabase";

function SingIn(){
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validPass, setValidPass] = useState('');
  const userDatabase = useProductDatabase()

  async function handleSingIn(){
    try {
      const response = await userDatabase.verifyUser(userEmail)
      //setValidEmail(response)

      if (userEmail === validEmail) {

      } else {

      }
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <View style={styles.container}>
      <TitelSingIn />

      <View style={styles.containerTwo}>
          <Text style={styles.titleInput}>Email:</Text>
          <InputSingIn
            placeholder="Digite seu email..."
            onChangeText={setUserEmail}
            value={userEmail}
          />

          <Text style={styles.titleInput}>Senha:</Text>
          <InputSingIn
            placeholder="Digite sua Senha..."
            onChangeText={setUserPassword}
            value={userPassword}
          />

          <TouchableOpacity
            style={styles.btnOne}
            onPress={handleSingIn}
          >
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnTwo}
            onPress={() => router.navigate("/screens/singUp")}
          >
            <Text style={styles.btnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#494d4b',
    padding: 15,
    gap: 15,
  },

  containerTwo: {
    flex: 1,
    gap: 15,
    padding: 10,
    justifyContent: 'center',
    marginBottom: 170,
  },

  titleInput: {
    color: '#f0e2be',
    fontSize: 16,
  },

  btnOne:{
    marginTop: 30,
    alignSelf: 'center',
    width: 320,
    backgroundColor: 'gray',
    padding: 11,
    borderRadius: 25,
  },

  btnTwo:{
    alignSelf: 'center',
    width: 320,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 25,
  },

  btnText: {
    color: '#f0e2be',
    textAlign: 'center',
    fontSize: 20,
  },
})

export default SingIn;
