import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native"
import { router } from "expo-router"


export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16, marginTop: 60, backgroundColor: '#011f11', }}>
      <Text style={styles.titleInput}>
          Are you Welcome
      </Text>
      <TouchableOpacity
        onPress={() => router.navigate("/screens/singIn")}>
          <Text style={styles.button}> Proximo </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titleInput: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },

  button: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    borderColor: "white",
  },
})
