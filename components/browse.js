import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'

export default function Browse() {
  const [files, setFiles] = useState([])

  const fetchFiles = async(f) => {
    const query_params = f == '' ? '' : `?folder=${f}`
    const resp = await fetch(`${DOMAIN_API}/ls${query_params}`)
    const files_tmp = await resp.json();
    return files_tmp
  }

  const updateFiles = async(f) => {
    setFiles(fetchFiles(f))

  }

  const addFile = async(f) => {
    const resp = await fetch(`${DOMAIN_API}/add?file=${f}`)
    const files_tmp = await resp.json();

  }

  useEffect(async() => {
    console.log("Browse")
    //setFiles(fetchFiles(''))
  }, [])
  // console.log(songs)
  return (
    <View>
      <Text>Browse</Text>
      <Button onPress={async (e)=>{console.log("click!");setFiles(await fetchFiles(''))}} title='Root'/>
      {
        files.map(function(file, i) {
          return <Text key={i}>
            {
              file.includes('.mp3') ? 
              <Button onPress={async(e) => {addFile(file)}} title={`Add ${file.split('/')[file.split('/').length - 1]}`}/> : <Button onPress={async(e) => {setFiles(await fetchFiles(file))}} title={file} />
            }
            --- {file}

          </Text>
        })
      }
    </View>
  )
}
