import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TCSport</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {
        /* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */
        <Image
          source={{ uri: 'https://picsum.photos/200/200' }}
          style={styles.image} />
      }
      <TouchableOpacity
        onPress={() => Alert.alert('Ingresando')}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Press Here</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ff1493',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: { height: 200, width: 200, borderRadius: 90 },
  button: {
    backgroundColor: "red",
    padding: 7,
    marginTop: 50
  },
  buttontext: {
    color: '#fff'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
