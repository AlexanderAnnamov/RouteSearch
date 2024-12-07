import { View, Text, StyleSheet } from 'react-native';
import PointsIcon from '../../../assets/img/icons/points.svg';
import { Place } from './Place/Place';

interface PlacesProps {
  places: PlaceType[];
}

export const Places = (props: PlacesProps) => {
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.title}>Места</Text>
        <PointsIcon style={styles.icon} />
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
