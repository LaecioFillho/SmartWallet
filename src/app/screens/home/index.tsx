import AddServices from "@/components/screenHome/AddSevices";
import BalaceLabel from "@/components/screenHome/BalanceLabel";
import ButtonAdd from "@/components/screenHome/ButtonAdd";
import CategoryList from "@/components/screenHome/CategoryList";
import Graphics from "@/components/screenHome/Graphics";

import TitleHome from "@/components/screenHome/TitleHome";
import { StyleSheet, Text, View } from "react-native";

function Home(){
  return(
    <View style={styles.container}>
      <TitleHome />
      <View style={styles.header}>
        <BalaceLabel />
        <Graphics />
      </View>
      <CategoryList />
      <AddServices />
      <ButtonAdd />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011f11',
    flex: 1,
    padding: 10,
  },

  header: {
    flexDirection: 'row',
  },
})

export default Home;
