import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (

    <RootNavigator />

  );
}



function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabOne">
        <Stack.Screen name="TabOne" component={TabOneScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="TabTwo" component={TabTwoScreen} options={{ title: 'Equipos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
