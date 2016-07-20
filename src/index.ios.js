/**
 * @brief:  入口 
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import {
  AppRegistry,
} from 'react-native';

var tabBar = require('./application/src/TabBarViewController')

AppRegistry.registerComponent('NetEasyNewsRN', () => tabBar);