import ListEntries from "@/components/screenNewEntry/ListEntries";
import TitleNewEntry from "@/components/screenNewEntry/TitleNewEntry";
import { StyleSheet, View } from "react-native";

function NewEntry(){
  return(
    <View style={styles.container}>
      <TitleNewEntry />
      <ListEntries />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011f11',
    flex: 1,
  },
});

export default NewEntry;
