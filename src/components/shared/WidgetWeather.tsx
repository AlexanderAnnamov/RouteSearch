import React from 'react'

import WeatherSunIcon from '../../assets/img/icons/weather-sun.svg'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../constants/styles/colors'

export const WidgetWeather = () => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <WeatherSunIcon style={styles.icon} />
        <Text style={styles.number}>+4</Text>
      </View>
      <Text style={styles.text}>
        Солнечно
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  icon: {
    width: 24,
    height: 24
  },
  number: {
    fontFamily: 'Lato-Bold',
    fontWeight: '500',
    fontSize: 14
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: colors.textSecondary
  }
});
