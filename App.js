import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Homepage from './src/pages/';

export default function App() {
  return (
    <View>
      <StatusBar style="inverted" />
      <Homepage />
    </View>
  );
}


