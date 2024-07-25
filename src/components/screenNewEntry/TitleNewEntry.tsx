import { StyleSheet, Text, View } from "react-native";

function TitleNewEntry(){
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Lançamentos</Text>
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
});

export default TitleNewEntry;
