import React from 'react';
import Browse from '../components/browse';
import { Button, Text, View } from 'react-native';

export default function BrowseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Browse</Text>
      <Browse />
    </View>
  );
}
