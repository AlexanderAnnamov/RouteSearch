import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


import { MainPage } from './src/pages/MainPage';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <>Загрузка шрифтов</>
  }

  return (
    <View style={styles.container}>
      <MainPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  text: {
    fontFamily: 'Lato-Regular'
  }
});
