import TitleBalance from "@/components/screenBalance/BalanceTitle";
import InputBalance from "@/components/screenBalance/InputBalance";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Balance(){
  return(
    <View style={styles.container}>
      <TitleBalance />
      <View style={styles.addBalance}>
        <Text style={styles.btnText}>Saldo</Text>
        <InputBalance />

        <TouchableOpacity
        style={styles.btnTwo}
        onPress={() => router.navigate('/screens/home')}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011f11',
    flex: 1,
  },

  addBalance:{
    backgroundColor: '#035731',
    borderRadius: 15,
    justifyContent: 'center',
    height: 400,
    padding: 20,
    margin: 10,
    marginTop: 30,
  },

  btnTwo: {
    position: 'absolute',
    top: 620,
    left: 20,
    width: 150,
    borderWidth: 1,
    borderColor: '#4BA66A',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Balance;
