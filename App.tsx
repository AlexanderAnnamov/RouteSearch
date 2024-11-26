import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/navigation/Routes";
import { useFonts } from 'expo-font';

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
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});



