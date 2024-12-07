import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import TableRunIcon from '../../../../assets/img/icons/tabler_run.svg';

interface PlaceProps extends PlaceType {}

export const Place = (props: PlaceProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: props.img }} style={styles.img} />
        <View style={styles.box}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
      <View style={styles.travelTimeContainer}>
        <TableRunIcon style={styles.icon} />
        <Text>{props.travelTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18
  },
  img: {
    width: 58,
    height: 58,
    borderRadius: 16
  },
  travelTimeContainer: {
    flexDirection: 'row',
    gap: 2,
    marginLeft: 68
  },
  icon: {
    width: 16,
    height: 16,
    display: 'flex',
    paddingVertical: 2
  }
});
