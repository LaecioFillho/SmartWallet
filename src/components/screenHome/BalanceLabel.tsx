import { StyleSheet, Text, View } from "react-native";

function BalaceLabel(){
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Saldo</Text>
      <Text style={styles.h1}> R$ 2.350,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: 32,
    color: 'white',
  },
});

export default BalaceLabel;
