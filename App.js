

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView} from 'react-native';


export default class App extends Component {
  render() {
    return (
     
      
      <View style={ styles.container }>
        <Text style={ styles.headerText }>
          Home
        </Text>
        <Text style={styles.textView}>
          Welcome to Handbook
        </Text>
       <Text style={styles.textView}>
      Takrif
     </Text>
     <Text style={styles.textView}>
     Peraturan Am
     </Text>
   </View>

      
    );
  }
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12
  },

  textView: {
    color: '#fff',
    padding: 12,
    backgroundColor: 'blue'
  },

  

  headerText: {
    fontSize: 14,
    padding: 12,
    color: '#fff',
    backgroundColor: 'green',
    marginBottom: 12
  }
});

