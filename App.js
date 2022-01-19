import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CurrentData from './components/current_data';
import Playlist from './components/playlist';
import Main from './screens/main';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function App() {
  return (
    <Main />
  )
}
