import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import {DOMAIN_API} from '../config'

export default function SingleFile({addFile, file}) {

  return (
    <Button onPress={async(e) => {addFile(file)}} title={`Add ${file.split('/')[file.split('/').length - 1]}`}/>
  )
}
