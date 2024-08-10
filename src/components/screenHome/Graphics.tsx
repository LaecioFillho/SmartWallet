import { createCategories, useProductDatabase } from '@/database/useProductDatabase';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

function Graphics(){

  const categoriesDataBase = useProductDatabase();
  const [releaseas, setReleaseas] = useState<createCategories[]>([]);
  const [search, setSearch] = useState("");
  let data = []

  async function list() {
    try {
      const response = await categoriesDataBase.searchBCategory(search)
      setReleaseas(response)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    list()
  }, [search]);

  releaseas.map(index => {
    if(index.total != null){
      data.push({id: index.id, value: index.total, color: index.color})
    }else{
      data = [
        {id: 1, value: 1, color: 'white'},
        {id: 2, value: 1, color: 'white'},
        {id: 3, value: 1, color: 'white'},
        {id: 4, value: 1, color: 'white'}
      ]
    }
  });

  const pieData = data.map((item) => ({
    key: item.id,
    value: item.value,
    svg: {fill: item.color},
    arc: { outerRadius: '100%', innerRadius: '60%',}
  }));

  return(
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <PieChart style={{height: 170, width: 160}} data={pieData}>
        <Text></Text>
      </PieChart>
    </View>
  );
};

export default Graphics;
