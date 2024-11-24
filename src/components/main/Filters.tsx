import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Search } from '../ui/Search'
import { Button } from '../ui/Button'

export const Filters = () => {
  return (
    <View style={styles.box}>
        <Search/>
        <Button type='square' icon='params'/>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        gap: 8
    }
})
