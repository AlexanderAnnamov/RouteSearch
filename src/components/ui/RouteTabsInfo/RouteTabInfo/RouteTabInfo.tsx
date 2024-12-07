import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WatchIcon from '../../../../assets/img/icons/watch.svg';
import RoadIcon from '../../../../assets/img/icons/road.svg';
import GeolocationIcon from '../../../../assets/img/icons/geolocation.svg';
import colors from '../../../../constants/styles/colors';

const typeIcon = {
  time: WatchIcon,
  way: RoadIcon,
  places: GeolocationIcon
};

interface RouteTabInfoProps extends Tab {}

export const RouteTabInfo = (props: RouteTabInfoProps) => {
  const TypeIcons = typeIcon[props.type];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
      <TypeIcons style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 92,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 4
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: colors.textTertirary
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18
  },
  icon: {
    position: 'absolute',
    bottom: 4,
    right: 4
  }
});
