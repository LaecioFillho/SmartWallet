import { createCategories, useProductDatabase } from "@/database/useProductDatabase";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

function CategoryList(){

  const categoriesDataBase = useProductDatabase();
  const [releaseas, setReleaseas] = useState<createCategories[]>([]);
  const [search, setSearch] = useState("");

  async function list() {
    try {
      const response = await categoriesDataBase.searchBCategory(search)
      setReleaseas(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    list()
  }, [search])

  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Categorias</Text>

      <FlatList
        data={releaseas}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) =>
          <View style={styles.categories}>
            <Text style={styles.p}>
              <FontAwesome
                style={styles.icon}
                name="circle"
                color={item.color}/> - {item.description}
            </Text>
            <Text style={styles.p}>- R$ {item.total.toFixed(2)}</Text>
          </ View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#026136',
    padding: 15,
    borderRadius: 10,
  },

  h1: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  p: {
    fontSize: 18,
    color: 'white',
  },

  icon:{
    fontSize: 22,
  },
});

export default CategoryList;
