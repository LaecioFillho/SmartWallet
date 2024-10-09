import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createCategories, useProductDatabase } from "@/database/useProductDatabase";
import InputAddCatgory from "./InputAddCategory";

function ListCategory(){
  const [edit, setEdit] = useState(styles.none)
  const [add, setAdd] = useState(styles.none)
  const [addCategories, setAddCategories] = useState(styles.none)
  const [buttonEdit, setButtonEdit] = useState('pen-to-square')
  let display = true

  const categoryDataBase = useProductDatabase();
  const [dataCategory, setDataCategory] = useState("");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<createCategories[]>([]);

  const [color, setColor] = useState('white')

  function colors(cor: string){
    setColor(cor)
  }

  function handleEdit(){
    if(display == true){
      setEdit(styles.iconsEdit);
      setAdd(styles.iconAdd);
      setButtonEdit('check');
      display = false;
    }else{
      setEdit(styles.none);
      setAdd(styles.none);
      setButtonEdit('pen-to-square');
    }
  };

  async function handleSave() {
    let total = 0
    try {
      const response = await categoryDataBase.createCategory(dataCategory, total, color)
      alert("Categoria: "+ dataCategory +" cadastrada!")
      list();
      closeAddCategory();
      setEdit(styles.none);
      setAdd(styles.none);
      setButtonEdit('pen-to-square');
      setDataCategory('');
    } catch (error) {
      console.log(error);
    }
  };

  async function list() {
    try {
      const response = await categoryDataBase.searchBCategory(search)
      setCategories(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    list()
  }, [search])

  async function remove(id: number) {
    try {
      await categoryDataBase.removeCategory(id)
      await list()
    } catch (error) {
      console.log(error)
    }
  }

  function openAddCategory(){
    setAddCategories(styles.addCategories)
  };

  function closeAddCategory(){
    setAddCategories(styles.none)
  };

  return(
    <View style={styles.container}>
        <AntDesign style={styles.icon} name="switcher" />
        <Text style={styles.h1}>Todas as Categorias Cadastradas</Text>

        <FlatList
          data={categories}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) =>
            <View style={styles.h2}>
              <TouchableOpacity
                style={{
                  backgroundColor: item.color,
                  borderRadius: 80,
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  position: 'absolute',
                  left: 30,
                  top: 10,
                  }}/>
              <Text style={styles.textCate}>
                {item.description}
              </Text>
              <Entypo
                style={edit}
                name="trash"
                onPress={() => remove(item.id)}/>
            </View>
          }/>

        <View style={addCategories}>
          <Text
            style={{color:'white', fontSize: 18, margin: 10, textAlign: 'center'}}>
              Nova Categoria
          </Text>
          <InputAddCatgory
            onChangeText={setDataCategory}
            value={dataCategory}/>
          <Text style={styles.space}> Escolha uma cor</Text>

          <View style={styles.colorsRow}>
            <TouchableOpacity
              style={styles.btnColors} onPress={() => colors('purple')}/>
            <TouchableOpacity
              style={styles.btnColors1} onPress={() => colors('#f33fc3')}/>
            <TouchableOpacity
              style={styles.btnColors2} onPress={() => colors('blue')}/>
            <TouchableOpacity
              style={styles.btnColors3} onPress={() => colors('red')}/>
            <TouchableOpacity
              style={styles.btnColors4} onPress={() => colors('yellow')}/>
            <TouchableOpacity
              style={styles.btnColors5} onPress={() => colors('gray')}/>
            <TouchableOpacity
              style={styles.btnColors6} onPress={() => colors('orange')}/>
          </View>

          <TouchableOpacity
            style={styles.btnAddCetegories}
            onPress={handleSave}>
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnAddCetegories}
            onPress={closeAddCategory}>
            <Text style={styles.btnText}>Fechar</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity onPress={openAddCategory}>
          <AntDesign style={add} name="pluscircle"/>
        </TouchableOpacity>

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
  container: {
    alignItems: 'center',
    height: 570,
  },

  icon:{
    textAlign: 'center',
    color: "white",
    fontSize: 54,
    marginTop: 20,
  },

  h1: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },

  h2: {
    backgroundColor: '#048A59',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  textCate: {
    fontSize: 18,
    color: 'white',
  },

  none: {
    display: 'none',
  },

  iconsEdit: {
    display: 'flex',
    fontSize: 22,
    color: 'red',
    position: 'absolute',
    right: 10,
    top: 10,
  },

  iconAdd:{
    fontSize: 32,
    color: 'white',
    marginTop: 10,
  },

  addCategories:{
    backgroundColor: '#026136',
    position: 'absolute',
    top: 200,
    borderRadius: 10,
    padding: 10,
    width: 300,
  },

  space:{
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },

  btnAddCetegories:{
    width: 280,
    borderWidth: 1,
    borderColor: '#4BA66A',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },

  colorsRow:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },

  btnColors:{
    backgroundColor: 'purple',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  btnColors1:{
    backgroundColor: '#f33fc3',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  btnColors2:{
    backgroundColor: 'blue',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  btnColors3:{
    backgroundColor: 'red',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  btnColors4:{
    backgroundColor: 'yellow',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  btnColors5:{
    backgroundColor: 'gray',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  btnColors6:{
    backgroundColor: 'orange',
    borderRadius: 80,
    width: 30,
    height: 30,
    marginBottom: 10,
  },

  btn: {
    position: 'absolute',
    zIndex: 99,
    top: 600,
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
    zIndex: 99,
    top: 600,
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

export default ListCategory;
