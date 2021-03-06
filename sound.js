import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import Sound from 'react-native-sound';

export default class MyComponent extends Component {
  playSound() {
    const mySound = new Sound('tap.wav', "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3", (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', mySound.getDuration());
        mySound.play();
      }
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.playSound.bind(this)}>
         <Text>Play Sound!</Text>
      </TouchableWithoutFeedback>
    );
  }
}