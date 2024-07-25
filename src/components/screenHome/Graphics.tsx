import React from 'react'
import { View } from 'react-native';
import { PieChart } from 'react-native-svg-charts'

function Graphics(){

  const data = [30,10,40,80];
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 4)
    },
  }));

  return(
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <PieChart style={{height: 170, width: 170}} data={pieData}>
      </PieChart>
    </View>
  );
};

export default Graphics;
