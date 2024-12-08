import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableWithoutFeedback
} from 'react-native';
import colors from '../constants/styles/colors';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootParams } from '../navigation';
import { BackIcon, DownloadIcon, LikeIcon } from '../components/ui';
import { RouteTabsInfo } from '../components/ui/RouteTabsInfo/RouteTabsInfo';
import { Tags } from '../components/ui/Tags/Tags';
import { Places } from '../components/shared/Places/Places';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Routes';

const placesData: PlaceType[] = [
  {
    img: 'https://opis-cdn.tinkoffjournal.ru/mercury/main____shutterstock_1117372322.dapuhxw21c35.jpg?preset=image_760w',
    title: 'Красивый парк',
    description: 'Уютное место для отдыха на природе.',
    travelTime: '10 мин'
  },
  {
    img: 'https://opis-cdn.tinkoffjournal.ru/mercury/main____shutterstock_1117372322.dapuhxw21c35.jpg?preset=image_760w',
    title: 'Исторический музей',
    description: 'Интересные экспонаты и много историй.',
    travelTime: '15 мин'
  },
  {
    img: 'https://opis-cdn.tinkoffjournal.ru/mercury/main____shutterstock_1117372322.dapuhxw21c35.jpg?preset=image_760w',
    title: 'Место встречи',
    description: 'Идеально для встреч с друзьями.',
    travelTime: '5 мин'
  },
  {
    img: 'https://opis-cdn.tinkoffjournal.ru/mercury/main____shutterstock_1117372322.dapuhxw21c35.jpg?preset=image_760w',
    title: 'Сладкая кофейня',
    description: 'Отличное место для утреннего кофе и десертов.',
    travelTime: '8 мин'
  },
  {
    img: 'https://opis-cdn.tinkoffjournal.ru/mercury/main____shutterstock_1117372322.dapuhxw21c35.jpg?preset=image_760w',
    title: 'Кинотеатр',
    description: 'Смотрим последние хиты и наслаждаемся попкорном.',
    travelTime: '20 мин'
  }
];

const data: Tab[] = [
  { title: 'Пешком', text: '2-4 ч', type: 'time' },
  { title: 'Путь', text: '30 км', type: 'way' },
  { title: 'Мест', text: '5', type: 'places' }
];

const tags = ['#прогулки по городу', '#Культура'];

type ParamsRoute = RouteProp<RootParams, 'route-card'>;

export const RouteCardPage = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'RouteCard'>) => {
  // const route = useRoute<ParamsRoute>();
  // const { id } = route.params;
  const [visible, setVisible] = useState(false);

  const handlePressOutside = () => {
    if (visible) {
      setVisible(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.pageContainer}>
        <ScrollView style={styles.scroll}>
          <View style={styles.buttonsGroup}>
            <BackIcon />
            <View style={styles.rightButtonsGroup}>
              <DownloadIcon />
              <LikeIcon />
            </View>
          </View>
          <Image
            source={{ uri: 'https://nashural.ru/assets/uploads/photo_2023-09-24_17-03-54-2.jpg' }}
            style={styles.img}
          ></Image>
          <View style={styles.content}>
            <View style={styles.info}>
              <Text style={styles.title}>На вершине уральской столицы</Text>
              <Tags tags={tags} />
              <RouteTabsInfo tabs={data} />
            </View>
            <Text style={styles.text}>
              Это увлекательное путешествие по современным высоткам Екатеринбурга, где вы сможете
              насладиться захватывающим панорамным видом на город и окунуться в мир архитектурных
              шедевров.
            </Text>
            <Places places={placesData} visible={visible} setVisible={setVisible} />
          </View>
          <View>
            <Button color={colors.backgroundAccent} title='Построить в Яндекс Картах' />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  scroll: {
    paddingBottom: 60
  },
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
    height: '100%',
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
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22
  }
});
