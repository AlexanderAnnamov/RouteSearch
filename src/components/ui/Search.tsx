import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../../constants/styles/colors';
import SearchIcon from '../../assets/img/icons/search.svg'

export const Search = () => {
  return (
    <View style={styles.box}>
      <TextInput style={styles.search} placeholder='Поиск' placeholderTextColor={colors.textTertirary}/>
      <SearchIcon style={styles.icon}/>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.backgroundSecondary,
    flex: 1
  },
  search: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    marginHorizontal: 16
  }
});
