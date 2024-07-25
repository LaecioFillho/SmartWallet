import InputNewEntry from "@/components/screenAddReleases/InputSingIn";
import TitleReleases from "@/components/screenAddReleases/TitleReleases";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function AddReleases(){
  const [nameEntry, setNameEntry] = useState('')
  const [valueEntry, setValueEntry] = useState('')
  const [dateEntry, setDateEntry] = useState('')

  const handleSaveEntry = () =>{
    const data = [
      {
        id: 1,
        description: nameEntry,
        price: valueEntry,
        date: dateEntry
      }
    ];
  };

  return(
    <ScrollView style={styles.container}>
      <TitleReleases />

      <View style={styles.warraper}>
        <Ionicons style={styles.icon} name="bag-handle-outline"/>
        <Text style={styles.h1}>Adicionar um Novo Lançamento</Text>


        <Text style={styles.label}>Nome do lançamento:</Text>
        <InputNewEntry
          placeholder="Ex: Digite o nome da compra..."
          placeholderTextColor={'gray'}
          onChangeText={setNameEntry}
          value={nameEntry}
        />
        <Text style={styles.label}>Valor R$:</Text>
        <InputNewEntry
          placeholder="Ex: Digite o valor da compra..."
          placeholderTextColor={'gray'}
          onChangeText={setValueEntry}
          value={valueEntry}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Data:</Text>
        <InputNewEntry
          placeholder="Ex: xx/xx/xxxx"
          placeholderTextColor={'gray'}
          onChangeText={setDateEntry}
          value={dateEntry}
          keyboardType="numeric"
          dataDetectorTypes="calendarEvent"
        />

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
          onPress={handleSaveEntry}
        >
          <Ionicons name="checkmark-circle" size={24} color="white" />
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    fontSize: 20,
    marginVertical: 20,
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
