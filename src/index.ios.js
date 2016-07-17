/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var MOCKED_NEWS_DATA = [
  {title: '今天天气好', date: '2015', thumbnail: 'http://i.imgur.com/UePbdph.jpg'},
];

class NetEasyNewsRN extends Component {
  render() {
    var news = MOCKED_NEWS_DATA[0];

    return (
      <View style={styles.container}>
        <Image 
          source={{uri:news.thumbnail}}
          style={styles.thumbnail}/>

        <View style={styles.rightContainer}>
          <Text>{news.title}</Text>
          <Text>{news.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});

AppRegistry.registerComponent('NetEasyNewsRN', () => NetEasyNewsRN);
