import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';
import PointsIcon from '../../../assets/img/icons/points.svg';
import { Place } from './Place/Place';
import PenIcon from '../../../assets/img/icons/pen.svg';
import colors from '../../../constants/styles/colors';

interface PlacesProps {
  places: PlaceType[];
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const Places = (props: PlacesProps) => {
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.title}>Места</Text>
        <View
          style={
            props.visible
              ? {
                  position: 'absolute',
                  zIndex: 1,
                  right: 0,
                  top: 30,
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                  backgroundColor: colors.backgroundSecondary,
                  borderRadius: 12,
                  flexDirection: 'row'
                }
              : { display: 'none' }
          }
        >
          <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 22 }}>Изменить маршрут</Text>
          <PenIcon style={{ width: 24, height: 24 }} />
        </View>
        <Pressable onPress={() => props.setVisible(!props.visible)}>
          <PointsIcon style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.placesBox}>
        {props.places.map((place: PlaceType, index) => (
          <Place
            key={index}
            img={place.img}
            title={place.title}
            description={place.description}
            travelTime={place.travelTime}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24
  },
  icon: {
    position: 'relative',
    width: 24,
    height: 24,
    borderRadius: 16
  },
  placesBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }
});
