import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const DOMAIN_API = 'http://192.168.8.117:4567'

export default function CurrentData({current_data}) {
  console.log(current_data);
  const [min_total, seg_total] = current_data.total_time.split(':');
  const [min_current, seg_current] = current_data.current_time.split(':');
  const segundos_actuales = Number(min_current) * 60 + Number(seg_current);
  const segundos_totales = Number(min_total) * 60 + Number(seg_total);
  const percentage_progress = segundos_actuales / segundos_totales;
  return (
    <View>
      <Text>Current Data</Text>
      <Text>Progreso: {percentage_progress * 100}</Text>
    </View>
  )
}

