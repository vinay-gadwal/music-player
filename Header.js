import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

// const Header = ({
//   message,
//   onDownPress,
//   onQueuePress,
//   onMessagePress,
// }) => (
  export default class header extends Component{
    constructor(){
      super();
      this.state={
        message:"inside database"
      }
    }
    onDownPress(){
      Alert.alert("hello")
    }
    onQueuePress(){
      return(
        <View>
          <Text>Hello</Text>
          </View>
      )
    }
    render(){
      return(
  <View style={styles.container}>
    <TouchableOpacity onPress={this.onDownPress}>
      <Image style={styles.button}
        source={require('./img/ic_keyboard_arrow_down_white.png')} />
    </TouchableOpacity>
    <Text 
      style={styles.message}>{this.state.message.toUpperCase()}</Text>
    <TouchableOpacity onPress={this.onQueuePress}>
      <Image style={styles.button}
        source={require('./img/ic_queue_music_white.png')} />
    </TouchableOpacity>
  </View>
);
}
  }
// export default Header;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    opacity: 0.72
  }
});