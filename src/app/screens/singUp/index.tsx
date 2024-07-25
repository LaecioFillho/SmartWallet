import { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useProductDatabase } from "@/database/useProductDatabase";
import { router } from "expo-router";

import TitelSingUp from "@/components/screenSingUp/TitleSingUp";
import InputSingUp from "@/components/screenSingUp/InputSingUp";
import PasswordIncorr from "@/components/screenSingUp/PasswordIncorr";
import { FontAwesome } from "@expo/vector-icons";

function SingUp(){
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [passwordIdent, setPasswordIdent] = useState('');
  const userDataBase = useProductDatabase();
  const [passIncorreta, setPassIncorreta] = useState([])

  async function handleSaveUser(){
    if (password === passwordIdent) {
      try {
        const response = await userDataBase.createUser({
          email,
          password,
        });

        Alert.alert("Cadastro realizado com sucesso!")
      } catch (error) {
        console.log(error)
      }
    } else {
      Alert.alert("Senhas Divergentes!");
    }
  }

  return(
    <View style={styles.container}>
      <TitelSingUp />

      <Text style={styles.titleInput}>Email:</Text>
      <InputSingUp
        placeholder="Digite seu email..."
        placeholderTextColor={'gray'}
        onChangeText={setUserEmail}
        value={email}
      />

      <Text style={styles.titleInput}>Crie uma Senha:</Text>
      <InputSingUp
        secureTextEntry
        placeholder="Digite sua senha..."
        placeholderTextColor={'gray'}
        onChangeText={setUserPassword}
        value={password}
      />

      <Text style={styles.titleInput}>Repita a Senha:</Text>
      <InputSingUp
        secureTextEntry
        placeholder="Repita a senha digitada acima..."
        placeholderTextColor={'gray'}
        onChangeText={setPasswordIdent}
        value={passwordIdent}
      />

      <Text style={{color: 'red', fontSize: 16}}>{passIncorreta}</Text>

      <TouchableOpacity
        style={styles.btnOne}
        onPress={handleSaveUser}
      >
      <Text style={styles.btnText}><FontAwesome name="user-plus" size={20}/> Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnTwo}
        onPress={() => router.navigate("/screens/singIn")}
      >
        <Text style={styles.btnText} >Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011f11',
    padding: 20,
    gap: 10,
  },

  titleInput: {
    color: 'white',
    fontSize: 16,
  },

  btnOne:{
    alignSelf: 'center',
    width: 320,
    backgroundColor: '#02BF5A',
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

export default SingUp;
