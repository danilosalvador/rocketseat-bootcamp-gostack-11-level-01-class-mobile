import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, StyleSheet } from 'react-native';

import api from './services/api';

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos os componentes possuem por padrão "display: flex"
//
// View: div, footer, header, main, aside, section, ...
// Text: p, span, strong, h1, h2, h3, ...

export default function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => { 
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#476b9e'/>

      <SafeAreaView
        style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item:project }) => (
            <Text style={styles.title}>{project.title}</Text>
          )}/>
      </SafeAreaView>

      {/* <View style={styles.container}>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#476b9e',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});