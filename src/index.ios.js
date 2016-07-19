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

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class NetEasyNewsRN extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moives:: null,
    };

    this.fetchData = this.fetchData.bind
  },

  render() {
    var news = MOCKED_NEWS_DATA[0];

    return (
      <View style={styles.container}>
        <Image 
          source={{uri:news.thumbnail}}
          style={styles.thumbnail}/>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.date}>{news.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('NetEasyNewsRN', () => NetEasyNewsRN);