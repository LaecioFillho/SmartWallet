import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ListEntries(){
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Todas os Gastos</Text>

      <Text style={styles.h2}>Alimentação</Text>
      <Text style={styles.h2}>Combustivel</Text>
      <Text style={styles.h2}>Aluguel</Text>
      <Text style={styles.h2}>Água</Text>
      <Text style={styles.h2}>Energia</Text>
      <Text style={styles.h2}>Outros</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnTwo}
        onPress={() => router.navigate('/screens/home')}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  h1: {
    fontSize: 32,
    color: 'white',
    marginTop: 45,
    marginBottom: 10,
  },

  h2: {
    backgroundColor: '#048A59',
    color: 'white',
    textAlign: 'center',
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 2,
    fontSize: 18,
  },

  btn: {
    position: 'absolute',
    top: 650,
    right: 20,
    backgroundColor: '#4BA66A',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTwo: {
    position: 'absolute',
    top: 650,
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

export default ListEntries;
