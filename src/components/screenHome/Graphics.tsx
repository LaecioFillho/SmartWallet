import { createCategories, useProductDatabase } from '@/database/useProductDatabase';
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

function Graphics(){

  const categoriesDataBase = useProductDatabase();
  const [releaseas, setReleaseas] = useState<createCategories[]>([]);
  const [search, setSearch] = useState("");
  let data = [{}]
  let color = []

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
      data.push(index.total)
      color.push(index.color)
    }else{
      data = [10, 10, 10, 10]
    }
  });

  const pieData = data.map((value, description) => ({
    value,
    key: `${value} - ${description}`,
    svg: {
      fill: ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 4)
    },
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
