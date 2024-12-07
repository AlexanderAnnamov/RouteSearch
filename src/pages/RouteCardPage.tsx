import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../constants/styles/colors';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootParams } from '../navigation';
import { BackIcon, DownloadIcon, LikeIcon } from '../components/ui';
import { RouteTabsInfo } from '../components/ui/RouteTabsInfo/RouteTabsInfo';
import { Tags } from '../components/ui/Tags/Tags';

const data: Tab[] = [
  { title: 'Пешком', text: '2-4 ч', type: 'time' },
  { title: 'Путь', text: '30 км', type: 'way' },
  { title: 'Мест', text: '5', type: 'places' }
];

const tags = ['#прогулки по городу', '#Культура'];

type ParamsRoute = RouteProp<RootParams, 'route-card'>;

export const RouteCardPage = () => {
  const route = useRoute<ParamsRoute>();
  const { id } = route.params;

  return (
    <View>
      <View style={styles.buttonsGroup}>
        <BackIcon />
        <View style={styles.rightButtonsGroup}>
          <DownloadIcon />
          <LikeIcon />
        </View>
      </View>
      <View style={styles.img}></View>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>На вершине уральской столицы</Text>
          <Tags tags={tags} />
          <RouteTabsInfo tabs={data} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: {
    width: '100%',
    position: 'absolute',
    top: 49,
    zIndex: 1,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightButtonsGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  img: {
    height: 340,
    backgroundColor: colors.secondary
  },
  content: {
    bottom: 20,
    backgroundColor: colors.white,
    height: 500,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28
  },
  info: {
    display: 'flex',
    gap: 8
  }
});
