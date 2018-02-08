import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, {backgroundColor:'#E1BEE7', alignSelf:'stretch'}]}>
          <Text style={styles.text1}>Buscador de Usuarios de Github</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    textAlign: 'center',
    color: 'black',
  },
});
