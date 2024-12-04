import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/styles/colors';

import SearchIcon from '../../assets/img/icons/search.svg'
import ParamsIcon from '../../assets/img/icons/params.svg'

type TypeButton = "square"
type TypeIcon = "params"

interface ButtonProps {
    type?: TypeButton
    icon?: TypeIcon
    iconAfterText?: Boolean
    children?: React.ReactNode
    style?: React.CSSProperties,
    onPress?: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.box, props.type === 'square' && styles.square]}>
        {props.icon === 'params' && <ParamsIcon style={styles.icon}/>}
        {props.children && <Text style={styles.text}>{props.children}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 12,
    backgroundColor: colors.backgroundSecondary,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 12,
  },
  square: {
    width: 44,
    height: 44
  },
  icon: {
    width: 20,
    height: 20
  },
  text: {

  }
});
