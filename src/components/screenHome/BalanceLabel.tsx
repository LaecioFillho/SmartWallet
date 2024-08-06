import { balance, useProductDatabase } from "@/database/useProductDatabase";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function BalaceLabel(){
  const balaceDatabase = useProductDatabase()

  const [id, setId] = useState(0)
  const [balanceShow, setBalanceShow] = useState<balance[]>([]);

  let show = 0

  balanceShow.map( index => {
    show = index.value
  })

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
      <Text style={styles.h1}>Saldo</Text>
      <Text style={styles.textBalance}> R$ {show.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 210,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBalance:{
    backgroundColor: '#1a6d07',
    borderRadius: 15,
    padding: 5,
    paddingRight: 13,
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 10,
  },

  h1: {
    fontSize: 32,
    color: 'white',
  },
});

export default BalaceLabel;
