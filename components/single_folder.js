import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'

export default function SingleFolder({setFiles, fetchFiles, file}) {

  return (
    <View
      style={styles.container}
      >
      <ScrollView
        horizontal={true}
        style={styles.scrollHorizontal}
        >
        <Text
          style={styles.itemText}
        >
          {file}
        </Text>
      </ScrollView>
      <View
        style={styles.item}
        >
        <Button onPress={async(e) => {setFiles(await fetchFiles(file))}} title="GO TO" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollHorizontal: {
    width: '50%',
  },
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
    paddingHorizontal: 10,
  },
  itemText: {
    // flex: 1,
    paddingHorizontal: 10,
    flexShrink: 1
  },
})
