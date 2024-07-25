import { FontAwesome } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

function CategoryList(){

  const categorias = [
    {id: '1', color: 'green', description: 'Alimentação', amount: 200.55},
    {id: '2', color: 'blue', description: 'Combustivel', amount: 300.55},
    {id: '3', color: 'red', description: 'Contas Fixas', amount: 100.45},
    {id: '4', color: 'gray', description: 'Internet/Telefone ', amount: 40.25},
    {id: '5', color: 'yellow', description: 'Aluguel', amount: 500.00},
  ];

  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Categorias</Text>

      <FlatList
        data={categorias}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          <View style={styles.categories}>
            <Text style={styles.p}>
              <FontAwesome style={styles.icon} name="circle"color={item.color}/>  {item.description}
            </Text>
            <Text style={styles.p}>- R$ {item.amount}</Text>
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
  },

  p: {
    fontSize: 18,
    color: 'white',
  },

  icon:{
    fontSize: 18,
  },
});

export default CategoryList;
