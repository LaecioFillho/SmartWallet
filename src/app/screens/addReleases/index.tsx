import InputSelect from "@/components/screenAddReleases/InputSelect";
import InputNewEntry from "@/components/screenAddReleases/InputNewEntry";
import TitleReleases from "@/components/screenAddReleases/TitleReleases";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputDate from "@/components/screenAddReleases/InputDate";
import { useProductDatabase } from "@/database/useProductDatabase";

function AddReleases(){
  const [nameEntry, setNameEntry] = useState('');
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [selectDate, setSelectDate] = useState<Date | null>(null);
  const [valueEntry, setValueEntry] = useState('');

  const releasesDatabase = useProductDatabase()
  valueEntry.replace(',', '.')
  let formattedDate = ''
  let value = Number(valueEntry);

  if(selectDate != null){
    formattedDate = selectDate.toISOString().split('T')[0]; // 'YYYY-MM-DD'
  };

  const dataCategory = (select: string) => {
    setSelectCategory(select)
  };

  const dataDay = (date: Date) => {
    setSelectDate(date)
  }

  function soma(){
        update()
        handleSaveEntry()
  }

  async function update() {
    try {
      const response = await releasesDatabase.updateTotalRelease(value, selectCategory)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSaveEntry() {
    try {
      const response = await releasesDatabase.createRelease(
        nameEntry,
        formattedDate,
        value,
        selectCategory
      )
      alert("Compra registrada");
      setNameEntry('')
      setValueEntry('')
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <View style={styles.container}>
      <TitleReleases />

      <View style={styles.warraper}>
        <Ionicons style={styles.icon} name="bag-handle-outline"/>
        <Text style={styles.h1}>Adicionar um Novo Lançamento</Text>

        <Text style={styles.label}>Nome do lançamento:</Text>
        <InputNewEntry
          placeholder="Ex: Hamburguer"
          maxLength={12}
          placeholderTextColor={'gray'}
          onChangeText={setNameEntry}
          value={nameEntry}
        />
        <Text style={styles.label}>Valor R$:</Text>
        <InputNewEntry
          placeholder="Ex: 0.00"
          placeholderTextColor={'gray'}
          onChangeText={setValueEntry}
          value={valueEntry}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Data:</Text>
        <InputDate propsDate={dataDay}/>

        <Text style={styles.label}>Categoria:</Text>
        <InputSelect props={dataCategory}/>

        <Text style={styles.fake}></Text>
        </View>

      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={() => router.navigate('/screens/home')}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTwo}
          onPress={soma}
        >
          <Ionicons name="checkmark-circle" size={24} color="white" />
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011f11',
    flex: 1,
  },

  warraper: {
    backgroundColor: '#026136',
    margin: 10,
    marginVertical: 20,
    borderRadius: 10,
  },

  fake:{
    marginBottom: 35,
  },

  h1: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },

  icon:{
    textAlign: 'center',
    color: "white",
    fontSize: 54,
    marginTop: 20,
  },

  label: {
    fontSize: 17,
    marginVertical: 10,
    color: 'white',
    margin: 20,
  },

  btns:{
    flexDirection: 'row',
    justifyContent: 'center',
  },

  buttonOne:{
    borderWidth: 1,
    borderColor: '#048A59',
    width: 160,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonTwo:{
    backgroundColor: '#048A59',
    width: 160,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    gap: 5,
  },

  btnText: {
    fontSize: 16,
    color: 'white',
  },
});

export default AddReleases;
