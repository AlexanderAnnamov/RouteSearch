import React from 'react'

import LocationIcon from '../../assets/img/icons/location.svg'
import { View, Text, StyleSheet } from 'react-native'

export const IconTitle = () => {
  return (
    <View style={styles.box}>
      <LocationIcon style={styles.icon}/>
      <Text style={styles.text}>Екатеринбург</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  icon: {
    width: 16,
    height: 16 
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 16
  }

})
