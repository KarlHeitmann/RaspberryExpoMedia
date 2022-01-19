import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function Playlist({songs}) {
  // console.log(songs)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.text}>Playlist</Text>
            {
              songs.map(function(song, i) {
                return <Text key={i}>
                  {song.artist} - {song.song}
                  <Button
                    onPress={async () => {
                      const resp = await fetch(`${DOMAIN_API}/play?index=${i+1}`)
                      const names = await resp.json();
                      console.log("playing")
                    }}
                    title="Play"
                    />
                </Text>
              })

            }
            <Text>--------------------</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingTop: 30,
  },
  scrollView: {
    backgroundColor: 'pink',

    marginHorizontal: 1,
  },
  text: {
    fontSize: 42,
  },
});

