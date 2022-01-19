import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CurrentData from './components/current_data';
import Playlist from './components/playlist';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function App() {
  const [isHungry, setIsHungry] = useState("NADA");
  const [artist, setArtist] = useState("Sin artista");
  const [title, setTitle] = useState("Sin titulo");
  const [status, setStatus] = useState("Sin titulo");
  const [current_data, setCurrentData] = useState({
    artist: "",
    consume: "",
    current_item_playlist: "",
    current_time: "",
    percentage: "",
    random: "",
    repeat: "",
    single: "",
    status: "",
    title: "",
    total_items_playlist: "",
    total_time: "",
    volume: "",
  });
  const [songs, setSongs] = useState([]);

  const refrescar = async (e) => {
    const resp = await fetch(DOMAIN_API)
    const names = await resp.json();
    setCurrentData(names)
    setIsHungry(`Artista: ${names.artist}`)
    setArtist(names.artist)
    setTitle(names.title)
    setStatus(names.status)
    // console.log(names)
  }
  
  const iniciar = async (e) => {
    await refrescar()
  }

  useEffect(async () => {
    const resp = await fetch(`${DOMAIN_API}/playlist`);
    const s = await resp.json();
    setSongs(s);
    await iniciar();
    const intervalo_refrescar = setInterval(refrescar, 1000);
    console.log("init")
    return function cleanup () {
      conasole.log("limpiando")
      clearInterval(intervalo_refrescar);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Playlist songs={songs}/>
      <CurrentData current_data={current_data}/>
      <Text>HOLA </Text>
      <Text>{artist}</Text>
      <Text>{title}</Text>
      <Text>HOLA Chao</Text>
      <Button
        onPress={refrescar}
        disabled={!isHungry}
        title="Status"
      />
      <Text>{status}</Text>
      <Button
        onPress={async () => {
          await fetch(`${DOMAIN_API}/toggle`)
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
