/**
 * @brief:  新闻列表的cell
 * @author: hj
 * @date:   2016-07-20
 */

import React, {Component} from 'react'
import {
	View,
	Image,
	Text,
} from 'react-native'

const styles = {
	content: {
		flex: 1,
		flexDirection: 'row',
	},
	thumbnail: {
		width: 90,
		height: 70,
		marginLeft: 10,
		marginTop: 7,
		marginBottom: 7,
	},
	rightContent: {
		flex: 1,
		paddingTop: 7,
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 7,
	},
	title: {
		flex: 1,
		fontSize: 15,
		fontWeight: 'bold',
		textAlign: 'left',
		color: '#525252',
	},
	bottomBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	sourceText: {
		fontSize: 12,
		color: '#b7b8b9',
	},
	replyBg: {
		backgroundColor: '#dbdbdb',
		borderRadius: 4,
		paddingLeft: 4,
		paddingRight: 4,
		paddingTop: 2,
		paddingBottom: 2,
	},
	replyCount: {
		fontSize: 9,
		color: '#979899',
	},
};

export default class NewsCell extends Component {
	constructor(props) {
		super(props);

		this.state = {
			model: props.model
		}
	};

	render() {
		return(
			<View style = {styles.content}>
				<Image
					source = {{uri: this.state.model.imgsrc}}
					style = {styles.thumbnail}
				/>
				<View style = {styles.rightContent}>
					<Text 
						numberOfLines = {2}
					    style = {styles.title}>
						{this.state.model.title}
					</Text>
					<View style = {styles.bottomBar}>
						<Text style={styles.sourceText}>{this.state.model.source}</Text>
						<View style = {styles.replyBg}>
							<Text style={styles.replyCount}>{this.state.model.replyCount}跟帖</Text>
						</View>
					</View>
				</View>
			</View>
		)
	}
};