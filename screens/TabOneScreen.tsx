import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const Stack = createStackNavigator();


  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>TCSport</Text>*/}
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {
        /* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */
        <Image
          source={require('../assets/images/logoTCSSports.png')}
          style={styles.image} />

      }

      <TouchableOpacity
        //onPress={() => navigation.push('TabTwo')}
        onPress={() => navigation.navigate('TabTwo')}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Match</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ff1493',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  image: {
    width: 200, height: 200, alignContent: 'center'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#f22275',
  },
  buttontext: {
    color: '#fff',
    fontSize: 18
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
