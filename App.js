import { Text, SafeAreaView, StyleSheet,View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import GoodMorning from './GoodMorning';
// or any files within the Snack
import AssetExample from './components/AssetExample';
import Start from './Start';
import TopList from './TopList'
import ArtistSong from './ArtistSong';
export default function App() {
  return (
  //  <GoodMorning/>
  // <Start/>
  // <TopList/>
   <ArtistSong/>
  );
}

const styles = StyleSheet.create({

});
