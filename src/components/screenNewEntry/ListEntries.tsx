import { Releases, useProductDatabase } from "@/database/useProductDatabase";
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ListEntries(){
  let display = false
  let cont = 0
  const releasesDataBase = useProductDatabase();

  //Função de alterar o botão de editar
  const [edit, setEdit] = useState(styles.none)
  const [buttonEdit, setButtonEdit] = useState('pen-to-square')

  //Função de receber os dados do banco
  const [releaseas, setReleaseas] = useState<Releases[]>([]);
  const [search, setSearch] = useState("");

  releaseas.map((index) => {
    cont += index.value
  })

  function handleEdit(){
    if(display == false){
      setEdit(styles.iconsEdit);
      setButtonEdit('check');
    }else{
      setEdit(styles.none);
      setButtonEdit('pen-to-square');
    }
    display = true;
  };

  async function list() {
    try {
      const response = await releasesDataBase.searchByRelease(search)
      setReleaseas(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    list()
  }, [search])

  async function remove(id: number){
    try {
      await releasesDataBase.removeRelease(id)
      await list()
    } catch (error) {
      console.log(error)
    }
  }

  //Pesquisar: <Input placeholder="Pesquisar" onChangeText={setSearch} />

  return(
    <View style={styles.container}>
      <FontAwesome5 style={styles.icon} name='clipboard-list' />
      <Text style={styles.h1}>Todas os Gastos</Text>

      <FlatList
        data={releaseas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) =>
          <View style={styles.row}>
            <View>
              <View style={styles.containerReleases}>
                <Text style={styles.textReleases}>
                  Descrição: "{item.description}" 
                </Text>
                <Text style={styles.textReleases}>
                  Data: {item.date}
                </Text>
              </View>

              <View style={styles.containerReleases}>
                <Text style={styles.textReleases}>
                  Categoria:  {item.category}
                </Text>
                <Text style={styles.textReleases}>
                  Valor:  R$ {item.value.toFixed(2)}
                </Text>
              </View>
            </View>
            <Entypo
              style={edit}
              name="trash"
              onPress={() => remove(item.id)}/>
          </View>
        }/>
        <View style={styles.containerReleases}>
          <Text style={styles.textSoma}>Total</Text>
          <Text style={styles.textSoma}>R$ {cont.toFixed(2)}</Text>
        </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={handleEdit}>
        <FontAwesome6
          style={styles.btnText} name={buttonEdit} size={26}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnTwo}
        onPress={() => router.navigate('/screens/home')}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  none: {
    display: 'none',
  },

  container: {
    backgroundColor: '#035731',
    alignItems: 'center',
    height: 600,
    borderWidth: 1,
    borderRadius: 15,
    margin: 8,
    marginTop: 20,
    paddingBottom: 10,
  },

  containerReleases: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#048A59',
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },

  icon:{
    textAlign: 'center',
    color: "white",
    fontSize: 54,
    marginTop: 20,
  },

  iconsEdit: {
    display: 'flex',
    fontSize: 20,
    color: 'red',
    marginLeft: 10,
  },

  h1: {
    fontSize: 32,
    color: 'white',
    marginBottom: 10,
  },

  h2: {
    backgroundColor: '#048A59',
    color: 'white',
    textAlign: 'center',
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 2,
    fontSize: 18,
  },

  textReleases: {
    fontSize: 16,
    color: 'white',
  },

  textSoma:{
    color: 'white',
    fontSize: 18,
    paddingTop: 5,
  },

  btn: {
    position: 'absolute',
    top: 620,
    right: 20,
    backgroundColor: '#4BA66A',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTwo: {
    position: 'absolute',
    top: 620,
    left: 20,
    width: 150,
    borderWidth: 1,
    borderColor: '#4BA66A',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ListEntries;
