import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'
import SingleFile from './single_file';
import SingleFolder from './single_folder';

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
    <View style={styles.container}>
      <Text>Browse</Text>
      <View
        style={styles.btnRoot}
      >
        <Button
          onPress={async (e)=>{console.log("click!");setFiles(await fetchFiles(''))}}
          title='Root'
          />
      </View>
      {
        files.map(function(file, i) {
          return <Text key={i}>
            {
              file.includes('.mp3') ? 
              <SingleFile addFile={addFile} file={file} /> : <SingleFolder setFiles={setFiles} fetchFiles={fetchFiles} file={file}/>
            }
            --- {file}

          </Text>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  btnRoot: {
    paddingVertical: 20,
  },
})
