import ListCategory from "@/components/screenCategories/ListCategory";
import TitleCategory from "@/components/screenCategories/TitleCategories";
import { StyleSheet, View } from "react-native";

function Categories(){
  return(
    <View style={styles.container}>
      <TitleCategory />
      <ListCategory />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011f11',
    flex: 1,
  },
});

export default Categories;
