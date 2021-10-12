import * as React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

//const [text, onChangeText] = React.useState("Useless Text");

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segunda Vista</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {
        /* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */




      }




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
