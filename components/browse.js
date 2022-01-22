import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'
import SingleFile from './single_file';
import SingleFolder from './single_folder';

export default function Browse() {
  const [files, setFiles] = useState([])
  const [parent_folder, setParentFolder] = useState('')

  const fetchFiles = async(f) => {
    const query_params = f == '' ? '' : `?folder=${f}`
    const resp = await fetch(`${DOMAIN_API}/ls${query_params}`)
    const files_tmp = await resp.json();
    console.log("files", files_tmp)
    if (f.includes('/')) {
      const fs = f.split('/')
      await setParentFolder(fs.slice(0, fs.length - 1).join('/'))
    } else {
      await setParentFolder('')
    }
    console.log("parent_folder", parent_folder, query_params)

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
  console.log(parent_folder)
  return (
    <View style={styles.container}>
      <View
        style={styles.btnRootContainer}
      >
        <View
          style={styles.btnRoot}
          >
          <Button
            onPress={async (e)=>{console.log("click!");setFiles(await fetchFiles(''))}}
            title='Root'
            />
        </View>
        <View
          style={styles.btnParent}
          >
          <Button
            onPress={async (e)=>{setFiles(await fetchFiles(parent_folder))}}
            title='..'
            />
        </View>
      </View>
      <Text>{parent_folder}</Text>
      {
        files.map(function(file, i) {
          return <Text key={i}>
            {
              file.toLowerCase().includes('.mp3') ? 
              <SingleFile addFile={addFile} file={file} /> : <SingleFolder setFiles={setFiles} fetchFiles={fetchFiles} file={file}/>
            }
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
  btnRootContainer: {
    paddingVertical: 20,
    flexDirection: 'row'
  },
  btnParent: {
    flex: 1,
    marginHorizontal: 10
  },
  btnRoot: {
    flex: 3,
    marginHorizontal: 10
  },
})
