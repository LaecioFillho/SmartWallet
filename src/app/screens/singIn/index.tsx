import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Input } from "@/components/Input";
import { router } from "expo-router";

function SingIn(){
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleSingIn(){
      
  }

  return(
    <View style={styles.container}>
      <Input
        placeholder="Digite seu email..."
        onChangeText={setUserEmail}
        value="userEmail"
      />
      <Input
        placeholder="Digite sua Senha..."
        onChangeText={setUserPassword}
        value="userEmail"
      />

      <Button
        title="Entrar"
        onPress={handleSingIn}
      />

      <Button
        title="cadastrar"
        onPress={() => router.navigate("/screens/singUp")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    gap: 15,
  }
})

export default SingIn;
