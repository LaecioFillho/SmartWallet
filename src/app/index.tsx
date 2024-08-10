import { useState } from "react"
import { View, Button, Alert, FlatList } from "react-native"
import { router } from "expo-router"
import { Input } from "../components/Input"

import { useProductDatabase, ProductDatabase,} from "../database/useProductDatabase";

export default function Index() {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const productDatabase = useProductDatabase()

  function details(item: ProductDatabase) {
    setId(String(item.id))
    setName(item.name)
    setQuantity(String(item.quantity))
  }

  function handleSave() {

  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16, marginTop: 60, backgroundColor: '#494d4b', }}>

      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input
        placeholder="Quantidade"
        onChangeText={setQuantity}
        value={quantity}
      />

      <Button title="Salvar" onPress={handleSave} />

      <Button
        title="Proximo"
        onPress={() => router.navigate("/screens/singIn")} />
    </View>
  )
}
