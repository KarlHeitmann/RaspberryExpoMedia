import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function SongPlaylist({song, active, i}){
  return (
    <View
      style={styles.container}
    >
      <Text
        style={active ? styles.negrita : styles.normal}
      >{song.artist} - {song.song}</Text>
      <Text>
      </Text>
      <View>
        <Button
          title="Play"
          onPress={async () => {
            const resp = await fetch(`${DOMAIN_API}/play?index=${i+1}`)
            const names = await resp.json();
            console.log("playing")
          }}
         />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  negrita: {
    // backgroundColor: "yellow",
    fontSize: 18,
    fontWeight: "900",
  },
  normal: {
    // backgroundColor: "green",
    fontSize: 14,
    fontWeight: "100",
  },
})
