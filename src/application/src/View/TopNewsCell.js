/**
 * @brief:  大图滚动cell
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
	pagination: {
		left: null,
		right: 8,
		bottom: 8,
	},
	dot: {
		backgroundColor:'rgba(255, 255, 255, 0.5)', 
		width: 2, 
		height: 2,
		borderRadius: 1, 
		margin: 3,
	},
	activeDot: {
		backgroundColor:'rgba(255, 255, 255, 1)', 
		width: 5, 
		height: 5,
		borderRadius: 2.5, 
		margin: 3,
	},
	image: {
		flex: 1,
		flexDirection: 'row',
	},
	title : {
		color : 'white',
		backgroundColor : 'transparent',
		fontSize : 15,
		alignSelf: 'flex-end',
		left: 8,
		bottom: 8,
	},
});

export default class TopNewsCell extends Component {
	constructor(props) {
		super(props);

		this.state = {
			model: props.model,
			rowID: props.rowID,
			sectionID: props.sectionID,
		};
	}

	render() {
		this.state.swiper = <Swiper 
				loop = {true}
				autoplay = {true}
				height = {180}
				paginationStyle = {styles.pagination} 
				dot = {<View style = {styles.dot}/>}
				activeDot = {<View style = {styles.activeDot}/>} >
				{
					this.state.model.ads.map((ad) => {
						return (
							<Image 
								key = {`${this.state.sectionID}-${this.state.rowID}`}
								source = {{uri: ad.imgsrc}}
								style = {styles.image}>
								<Text style = {styles.title}>
									{ad.title}
								</Text>
							</Image>
						);
					})
				}
			</Swiper>
			
		return this.state.swiper;
	}
};