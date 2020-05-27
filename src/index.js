import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos os componentes possuem por padrão "display: flex"
//
// View: div, footer, header, main, aside, section, ...
// Text: p, span, strong, h1, h2, h3, ...

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#476b9e'/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack 🚀</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#476b9e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 44,
    fontWeight: 'bold',
  },
});