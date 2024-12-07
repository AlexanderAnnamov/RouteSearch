import React from 'react';
import { View, StyleSheet } from 'react-native';
import { routes } from '../../../mockie/routes';
import { Route } from './Route';

export const Routes = () => {
  return (
    <View style={styles.box}>
      {routes.map((route) => {
        return <Route key={route.id} {...route} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    gap: 16
  }
});
