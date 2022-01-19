import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function Browse() {
  const [files, setFiles] = useState([])

  useEffect(async() => {
    console.log("Browse")
    const resp = await fetch(`${DOMAIN_API}/ls`)
    const files = await resp.json();
    setFiles(files)
  }, [])
  // console.log(songs)
  return (
    <View>
      <Text>Browse</Text>
      {
        files.map(function(file, i) {
          return <Text key={i}>
            {file}
          </Text>
        })
      }
    </View>
  )
}
