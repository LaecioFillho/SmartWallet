import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ButtonAdd(){
  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.navigate('/screens/addReleases')}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 700,
    right: 20,
  },

  btn: {
    backgroundColor: '#4BA66A',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ButtonAdd;
