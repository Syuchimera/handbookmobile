

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
          Welcome to Handbookzvddsfdsfdsfdsfsdfsdgsdjdnvkdsjfndskf
          fsdklfnsdklfndslkfsdlfkdsnflksdnfds
          sfksdfnskdjfnsdkjfdsnf
          fkdsjfbdsjk
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
    backgroundColor: '#000'
  },

  

  headerText: {
    fontSize: 14,
    padding: 12,
    color: '#fff',
    backgroundColor: 'red',
    marginBottom: 12
  }
});
