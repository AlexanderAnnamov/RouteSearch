import { View, StyleSheet } from 'react-native';
import React from 'react';
import { RouteTabInfo } from './RouteTabInfo/RouteTabInfo';

interface RouteTabsInfoProps {
  tabs: Tab[];
}

export const RouteTabsInfo = (props: RouteTabsInfoProps) => (
  <View style={styles.container}>
    {props.tabs.map((tag: Tab, index) => (
      <RouteTabInfo key={index} title={tag.title} text={tag.text} type={tag.type} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12
  }
});
