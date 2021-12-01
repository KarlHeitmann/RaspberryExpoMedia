import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isHungry, setIsHungry] = useState("NADA");
  const [artist, setArtist] = useState("Sin artista");
  const [title, setTitle] = useState("Sin titulo");
  const [status, setStatus] = useState("Sin titulo");

  const statusFunc = (e) => {

  }

  return (
    <View style={styles.container}>
      <Text>HOLA </Text>
      <Text>{artist}</Text>
      <Text>{title}</Text>
      <Text>HOLA Chao</Text>
      <Button
        onPress={async () => {
          const resp = await fetch('http://192.168.8.110:4567')
          const names = await resp.json();
          setIsHungry(`Artista: ${names.artist}`)
          setArtist(names.artist)
          setTitle(names.title)
          setStatus(names.status)
          console.log(names)
          //setIsHungry(false);
        }}
        disabled={!isHungry}
        title="Status"
      />
      <Text>{status}</Text>
      <Button
        onPress={async () => {
          await fetch('http://192.168.8.110:4567/toggle')
          //setIsHungry(false);
        }}
        disabled={!isHungry}
        title={status == "playing" ? "PAUSE" : "Play"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
