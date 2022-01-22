import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import SongPlaylist from './song_playlist';

import {DOMAIN_API} from '../config'

export default function Playlist({songs, current_item_playlist}) {
  // console.log(songs)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.text}>Playlist</Text>
            {
              songs.map(function(song, i) {
                return <SongPlaylist
                  song={song}
                  active={(i+1) == current_item_playlist ? true : false}
                  i={i}
                  key={i}
                  />
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
    width: '100%',
    flex: 1,
  },
  negrita: {
    fontWeight: "700"
  },
  normal: {
    fontWeight: "100"
  },
  scrollView: {
    backgroundColor: '#efefef',

    marginHorizontal: 1,
  },
  text: {
    fontSize: 42,
  },
});

