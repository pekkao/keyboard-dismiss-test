import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';

export default function App() {

  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  useEffect(() => {
    Keyboard.dismiss();
  }, [text, number]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="character here"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="number here"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});