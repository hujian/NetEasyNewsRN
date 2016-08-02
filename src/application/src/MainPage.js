/**
 * @brief:  主控制器
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react'
import {
	View,
	Text,
	Navigator,
	StyleSheet,
	TabBarIOS,
	TouchableOpacity,
	StatusBar,
} from 'react-native';

import NewsListPage from './NewsListPage';
import VedioViewController from './VedioViewController';
import TopicViewController from './TopicViewController';
import MeViewController from './MeViewController';

const NEWS_TAB = 'news';
const VEDIO_TAB = 'vedio';
const TOPIC_TAB = 'topic';
const ME_TAB = 'me';

const images = {
	news: require('./res/img/tabbar_icon_news_normal.png'),
	vedio: require('./res/img/tabbar_icon_media_normal.png'),
	topic: require('./res/img/tabbar_icon_reader_normal.png'),
	me: require('./res/img/tabbar_icon_me_normal.png'),
};

const styles = {
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 64,
		marginBottom: 49,
	},
	navBar: {
		backgroundColor:'#dd3248',
	},
	navBarText: {
		color:'white',
		fontSize: 16,
		margin: 10,
	},
	navBarTitleText: {
		fontWeight: '500',
		fontSize: 22,
	},
};

const Nav = {
	LeftButton(route, navigator, index, navState) {
		if(route.idx != 'main') {
			return (
				<TouchableOpacity onPress = {() => navigator.pop()}>
					<Text style = {[styles.navBarText, styles.navBarButtonText]}>
						返回
					</Text>
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	},

	RightButton(route, navigator, index, navState) {
		return null;
	},

	Title(route, navigator, index, navState) {
		return (
			<Text style={[styles.navBarText, styles.navBarTitleText]}>
				{route.name}
			</Text>
		);
	},
}

export default class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'news',
		}
	}

	navigationBar() {
		return (
			<Navigator.NavigationBar
			 	routeMapper = {Nav}
			 	style = {styles.navBar}
		    />
		);
	}

	addNavigator(component, title) {
		return (
			<Navigator
				initialRoute = {{component: component, name: title}}
				configureScene = {
					(route) => {
						return Navigator.SceneConfigs.PushFromRight;
					}
				}
				renderScene = {(route, navigator) => {
					let Component = route.component;
					return (
						<View style = {styles.contentContainer}>
							<StatusBar barStyle = 'light-content'></StatusBar>
							<Component {...route.params} navigator = {navigator}/>
						</View>
					);
				}}
				navigationBar = {this.navigationBar()}
			/>
		);
	}

	render() {
		return (
			<TabBarIOS
				style = {styles.container}
				tintColor = 'red'
				barTintColor = 'white'
			>
				<TabBarIOS.Item
					icon = {images.news}
					title = '新闻'
					selected = {this.state.selectedTab === NEWS_TAB}
					onPress = {
						() => {
							this.setState({
								selectedTab: NEWS_TAB
							})
						}
					}
				>
					{this.addNavigator(NewsListPage, '新闻列表')}
				</TabBarIOS.Item>

				<TabBarIOS.Item
					icon = {images.vedio}
					title = '视频'
					selected = {this.state.selectedTab === VEDIO_TAB}
					onPress = {
						() => {
							this.setState({
								selectedTab: VEDIO_TAB
							})
						}
					}
				>
					{this.addNavigator(VedioViewController, '视频')}
				</TabBarIOS.Item>

				<TabBarIOS.Item
					icon = {images.topic}
					title = '话题'
					selected = {this.state.selectedTab === TOPIC_TAB}
					onPress = {
						() => {
							this.setState({
								selectedTab: TOPIC_TAB
							})
						}
					}
				>
					{this.addNavigator(TopicViewController, '主题')}
				</TabBarIOS.Item>

				<TabBarIOS.Item
					icon = {images.me}
					title = '我'
					selected = {this.state.selectedTab === ME_TAB} 
					onPress = {
						() => {
							this.setState({
								selectedTab: ME_TAB
							})
						}
					}
				>
					{this.addNavigator(VedioViewController, '我')}
				</TabBarIOS.Item>

			</TabBarIOS>
		)
	}
};