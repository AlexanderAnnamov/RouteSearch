import React from 'react'

import { StyleSheet, View } from 'react-native';
import { WidgetWeather } from '../shared/WidgetWeather';
import { IconTitle } from '../shared/IconTitle';

export const Header = () => {
  return (
    <View style={styles.box}>
        <WidgetWeather/>
        <IconTitle/>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 8,
        paddingHorizontal: 16,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
  });
