import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../../constants/styles/colors'

type TypeTab = "routes" | "places"

interface TabsProps {
  selectedTab: TypeTab,
  setSelectedTab: (value: TypeTab) => void
}

export const Tabs: React.FC<TabsProps> = (props) => {

  const tabsStyle = {
    routes: {
      box: { ...styles.tab, backgroundColor: props.selectedTab === 'routes' ? colors.backgroundAccent : 'none' },
      text: { ...styles.text, color: props.selectedTab === 'routes' ? colors.textWhite : 'none' },
    },
    places: {
      box: { ...styles.tab, backgroundColor: props.selectedTab === 'places' ? colors.backgroundAccent : 'none' },
      text: { ...styles.text, color: props.selectedTab === 'places' ? colors.textWhite : 'none' },
    } 
  }

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={() => props.setSelectedTab('routes')} style={tabsStyle.routes.box}>
        <Text style={tabsStyle.routes.text}>
          Маршруты
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setSelectedTab('places')} style={tabsStyle.places.box}>
        <Text style={tabsStyle.places.text}> 
          Места
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    padding: 4,
    backgroundColor: colors.backgroundSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 36
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontWeight: '500',
    fontSize: 16,
    color: colors.textSecondary
  }
})
