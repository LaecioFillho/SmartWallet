import { createCategories, useProductDatabase } from '@/database/useProductDatabase';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface InputSelectProps {
  props: (dados: string) => void;
};

const InputSelect: React.FC<InputSelectProps> = ({ props }) => {

  const [openBox, setOpenBox] = useState(styles.none);
  const [selected, setSelected] = useState<string>("Selecione");
  const [search, setSearch] = useState("");
  const [iconSelect, setIconSelect] = useState("chevron-down-circle-sharp");
  const [categories, setCategories] = useState<createCategories[]>([]);

  const categoryDataBase = useProductDatabase();

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

  const openBoxSelect = () => {
    setOpenBox(styles.boxSelect)
    setIconSelect('close')
  }

  const closeBoxSelect = () => {
    setOpenBox(styles.none)
    setIconSelect('chevron-down-circle-sharp')
  }

  return(
    <SafeAreaView style={{overflow: 'scroll',}}>
      <TouchableOpacity
        style={styles.inputSelect}
        onPress={openBoxSelect}>
        <Text
          style={styles.textSelect}>
            {selected}
        </Text>
        <Ionicons
          name={iconSelect}
          size={18}
          color={'white'}
          onPress={closeBoxSelect}/>
      </TouchableOpacity>

      <FlatList
        style={openBox}
        data={categories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) =>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {
            setSelected(item.description)
            props(item.description)
            closeBoxSelect()
            }}>
            <Text style={styles.textCategory}>
              {item.description}
            </Text>
          </TouchableOpacity>
        </View>
      }/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  none: {
    display: 'none',
  },

  container: {
    margin: 'auto',
    overflow: 'visible',
  },

  textCategory: {
    textAlign: 'center',
    width: 300,
    fontSize: 18,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginTop: 5,
  },

  textSelect:{
    marginLeft: 120,
    fontSize: 18,
    color: 'white',
  },

  inputSelect:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 20,
  },

  boxSelect: {
    height: 140,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 15,
    overflow: 'scroll',
  },
});

export default InputSelect;
