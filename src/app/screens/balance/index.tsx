import TitleBalance from "@/components/screenBalance/BalanceTitle";
import InputBalance from "@/components/screenBalance/InputBalance";
import { balance, useProductDatabase } from "@/database/useProductDatabase";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Balance(){
  const balaceDatabase = useProductDatabase()

  const [id, setId] = useState(0)
  const [balance, setBalance] = useState('0,00')
  const [balanceShow, setBalanceShow] = useState<balance[]>([]);

  let value = Number(balance);
  let show = 0

  balanceShow.map( index => {
    show = index.value
  })

  function handleSaveBalance(){
    if(id === 0){
      setId(1)
      saveBalance()
    }else{
      update()
    }
  }

  async function saveBalance() {
    try {
      const response = await balaceDatabase.saveBalance(id, value)
      alert("Saldo Atualizado!");
    } catch (error) {
      console.log(error)
    }
    list()
  }

  async function update() {
    try {
      const response = await balaceDatabase.updateBalance({
        id,
        value,})
      alert("Saldo Atualizado! 2")
    } catch (error) {
      console.log(error)
    }
    list()
  }

  async function list() {
    try {
      const response = await balaceDatabase.searchByBalance(id)
      setBalanceShow(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    list()
  }, [id])


  return(
    <View style={styles.container}>
      <TitleBalance />

      <View style={styles.addBalance}>
        <View>
          <Text style={styles.textLabel}>Saldo atual:</Text>
          <Text style={styles.textBalance}>R$ {show.toFixed(2)}</Text>
        </View>

        <View>
          <Text style={styles.textLabel}>Atualizar Saldo: R$</Text>
          <InputBalance
            placeholder="0,00"
            placeholderTextColor={'gray'}
            keyboardType="decimal-pad"
            onChangeText={setBalance}/>

          <TouchableOpacity
            style={styles.btnUpdate}
            onPress={handleSaveBalance}>
            <Text style={styles.btnText}>Atualizar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnUpdate}
            onPress={() => router.navigate('/screens/home')}>
            <Text style={styles.btnText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011f11',
    flex: 1,
  },

  addBalance:{
    backgroundColor: '#035731',
    borderRadius: 15,
    gap: 85,
    height: 580,
    padding: 20,
    margin: 10,
    marginTop: 30,
  },

  textLabel:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },

  textBalance:{
    backgroundColor: '#1a6d07',
    borderRadius: 15,
    padding: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 10,
  },

  btnUpdate:{
    width: 200,
    borderWidth: 1,
    borderColor: '#4BA66A',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },

  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Balance;
