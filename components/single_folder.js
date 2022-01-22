import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'

export default function SingleFolder({setFiles, fetchFiles, file}) {

  return (
    <View
      style={styles.container}
      >
      <View
        style={styles.item}
        >
        <Text>
          {file}
        </Text>
      </View>
      <View
        style={styles.item}
        >
        <Button onPress={async(e) => {setFiles(await fetchFiles(file))}} title="GO TO" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center'
    alignItems: 'center',
    // alignItems: 'flex-end',
    // justifyContent: 'space-between',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  item: {
    flex: 1,
  },
})
