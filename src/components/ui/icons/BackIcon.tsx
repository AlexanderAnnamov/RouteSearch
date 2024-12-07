import { TouchableOpacity, StyleSheet } from 'react-native';
import GoBackIcon from '../../../assets/img/icons/arrow-left.svg';
import React from 'react';
import colors from '../../../constants/styles/colors';
import { useNavigation } from '@react-navigation/native';

export const BackIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
      <GoBackIcon />
    </TouchableOpacity>
  );
};

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
