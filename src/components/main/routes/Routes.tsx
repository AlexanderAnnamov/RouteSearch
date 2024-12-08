import React from 'react';
import { View, StyleSheet } from 'react-native';
import { routes } from '../../../mockie/routes';
import { Route } from './Route';
import { RootStackParamList } from '../../../navigation/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Routes = ({navigate}: {navigate: (route: string) => void}) => {
  return (
    <View style={styles.box}>
      {routes.map((route) => {
        return <Route navigate={navigate} key={route.id} {...route} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    gap: 16
  }
});
