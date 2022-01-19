import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import Main from './screens/main';
import BrowseScreen from './screens/browse_screen';


const DOMAIN_API = 'http://192.168.8.117:4567'

function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button
        title="Main"
        onPress={() => navigation.navigate('Main')}
      />
      <Text>....</Text>
      <Button
        title="Browse"
        onPress={() => navigation.navigate('Browse')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Browse" component={BrowseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

    // <Main />