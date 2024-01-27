import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './routes/Navigation';


export default function App() {

  return (

    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center"
  }
})