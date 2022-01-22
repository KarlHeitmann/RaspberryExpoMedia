import React from 'react';
import Browse from '../components/browse';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function BrowseScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ScrollView style={styles.scrollView}>
            <Browse />
          </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  negrita: {
    fontWeight: "700"
  },
  normal: {
    fontWeight: "100"
  },
  scrollView: {
    backgroundColor: 'pink',

  },
  text: {
    fontSize: 42,
  },
});


