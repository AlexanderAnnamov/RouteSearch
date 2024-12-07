import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../../constants/styles/colors';
import DnlIcon from '../../../assets/img/icons/download.svg';

export const DownloadIcon = () => (
  <TouchableOpacity style={styles.icon}>
    <DnlIcon />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.backgroundWhite80
  }
});
