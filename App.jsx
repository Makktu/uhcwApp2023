import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Title from './src/components/Title';
import EnterQuery from './src/components/EnterQuery';
import InfoBox from './src/components/InfoBox';
import GoBack from './src/components/GoBack';
import { useState } from 'react';

const backgroundImages = [
  './assets/images/uhcw-main.png',
  './assets/images/uhcw-main2.png',
  './assets/images/uhcw-main3.png',
];

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false);

  const bgImg1 = require('./assets/images/uhcw-main2.png');

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={['#14407f', '#0d0e0e']}
        style={styles.appContainerStyle}
      >
        <ImageBackground
          source={bgImg1}
          resizeMode='cover'
          style={styles.appContainerStyle}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.titleContainer}>
            <Title />
          </View>
          <View style={styles.titleContainer}>
            <EnterQuery />
            {/* <View style={styles.titleContainer}>
              <InfoBox />
            </View> */}
            {canGoBack ? <GoBack /> : null}
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
  },
  titleContainer: {
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.15,
  },
});
