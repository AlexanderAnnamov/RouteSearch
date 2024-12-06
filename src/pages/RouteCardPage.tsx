import React from 'react';
import {Text, View} from "react-native";
import colors from "../constants/styles/colors";
import { useRoute } from '@react-navigation/native';

export const RouteCardPage = () => {
  const route = useRoute();
  const {id} = route.params;
  
  return (
    <View>
      <Text style={{marginTop: 50, color: colors.primary}}>привет</Text>
      <Text>{id}</Text>
    </View>
  );
};
