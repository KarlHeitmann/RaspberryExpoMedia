import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function Browse() {
  const [files, setFiles] = useState([])

  const fetchFiles = async(f) => {
    console.log("bla bla bla")
    const query_params = f == '' ? '' : `?folder=${f}`
    console.log(query_params)
    const resp = await fetch(`${DOMAIN_API}/ls${query_params}`)
    console.log(resp)
    const files_tmp = await resp.json();
    console.log(files_tmp)
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
