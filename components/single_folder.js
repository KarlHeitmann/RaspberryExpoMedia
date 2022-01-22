import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'

export default function SingleFolder({setFiles, fetchFiles, file}) {

  return (
    <Button onPress={async(e) => {setFiles(await fetchFiles(file))}} title={file} />
  )
}
