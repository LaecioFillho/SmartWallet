import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

function TitleHome(){
  return(
    <View>
      <View style={styles.container}>
          <Text style={styles.h1}>Finanças</Text>
      </View>
      <MaterialCommunityIcons style={styles.icon} name="finance" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4BA66A',
    width: 200,
    padding: 5,
    marginTop: 40,
    marginLeft: -20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },

  h1: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },

  icon: {
    position: 'absolute',
    fontSize: 38,
    color: 'white',
    right: 5,
    top: 40,
  },
});

export default TitleHome;
