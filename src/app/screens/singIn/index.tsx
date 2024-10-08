import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import TitelSingIn from "@/components/screenSingIn/TitleSingIn";
import InputSingIn from "@/components/screenSingIn/InputSingIn";
import { useProductDatabase, userWallet } from "@/database/useProductDatabase";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function SingIn(){
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validEmail, setValidEmail] = useState();
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
          <Text
            style={styles.titleInput}>
              <MaterialCommunityIcons name="email" size={18}/> Email:
          </Text>
          <InputSingIn
            placeholder="Digite seu email..."
            placeholderTextColor={'gray'}
            onChangeText={setUserEmail}
            value={userEmail}
          />

          <Text
            style={styles.titleInput}><MaterialCommunityIcons name="onepassword" size={18}/> Senha:
          </Text>
          <InputSingIn
            placeholder="Digite sua Senha..."
            placeholderTextColor={'gray'}
            onChangeText={setUserPassword}
            value={userPassword}
          />

          <TouchableOpacity
            style={styles.btnOne}
            onPress={() => router.navigate("/screens/home")}
          >

            <Text style={styles.btnText}><AntDesign name="login" size={20}/> Entrar</Text>
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
    backgroundColor: '#011f11',
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
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
  },

  btnOne:{
    marginTop: 30,
    alignSelf: 'center',
    width: 320,
    backgroundColor: '#02BA58',
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
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
})

export default SingIn;
