import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/styles/colors';

import ActiveIcon from '../../assets/img/icons/checkbox-active.svg'
import DisabledIcon from '../../assets/img/icons/checkbox-disabled.svg'

interface CheckboxProps {
    style?: React.CSSProperties,
    text?: string
}


export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const [checked, setChecked] = React.useState((false))
  return (
    <TouchableOpacity onPress={() => setChecked(!checked)} style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
        <View>
            {checked ? <ActiveIcon/> : <DisabledIcon/>}
        </View>
        <Text>
            {props.text}
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {

  },
});
