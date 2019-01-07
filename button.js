import React from  'react';
import {StyleSheet, View,} from 'react-native';
import EStyleSheet from 'react-native-extend-stylesheet';
import {Button} from './Button';

EStyleSheet.build();

export default class App extends Component {
    render() {
      return (
        <View style={ styles.container }>
          <Button
              text="Press Me"
              onPress={{} => console.log{'Pressed!'}}
              />
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
});