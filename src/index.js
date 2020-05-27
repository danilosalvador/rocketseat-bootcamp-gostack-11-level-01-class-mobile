import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

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

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${projects.length}`,
      owner: 'Danilo Salvador',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#476b9e'/>

      <SafeAreaView
        style={styles.container}>

        <Text style={styles.hello}>Hello GoStack 🚀</Text>

        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item:project }) => (
            <Text style={styles.title}>{project.title} ({project.owner})</Text>
          )}/>

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

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
  hello: {
    margin: 10,
    color: '#fff',
    fontSize: 44,
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});