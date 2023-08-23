import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
      <LinearGradient
        colors={['#14407f', '#09302b']}
        style={styles.appContainerStyle}
      >
        <View style={styles.container}>
          <Text style={{ color: 'azure', fontSize: 34 }}>UHCW</Text>
          <Text style={{ color: 'azure', fontSize: 22 }}>
            Universal Directory
          </Text>
          <Text
            style={{ color: 'lightgreen', fontSize: 10, fontWeight: 'bold' }}
          >
            not an official NHS app
          </Text>
          <StatusBar style='light' />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
    color: 'azure',
  },
});
