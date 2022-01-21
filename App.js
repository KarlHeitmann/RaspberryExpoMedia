import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View, StyleSheet } from 'react-native';
import Main from './screens/main';
import BrowseScreen from './screens/browse_screen';


import {DOMAIN_API} from './config'

function About({ navigation }) {

  const quit = async(f) => {
    const resp = await fetch(`${DOMAIN_API}/qqq`)
    const files_tmp = await resp.json();

  }

  return (
    <View style={styles.container}>
      <Text 
         style={styles.bottom}
        >About Screen</Text>
      <Button
        title="Main"
        onPress={() => navigation.navigate('Main')}
      />
      <Text>....</Text>
      <Button
        title="Browse"
        onPress={() => navigation.navigate('Browse')}
      />
      <View
        style={styles.bottom}
      >
        <Text>bla bla</Text>
        <Button
          title="Quit"
          onPress={quit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 
  bottom: {
    backgroundColor: 'crimson'
  }
})

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