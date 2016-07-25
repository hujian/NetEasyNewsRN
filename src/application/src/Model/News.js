/**
 * @brief:  新闻模块的model
 * @author: hj
 * @date:   2016-07-20
 */
'use strict';

import React, {Component} from 'react';

const BASE_URL = 'http://c.m.163.com';

const NEWS_URLS = [
	{
		'title': '头条',
		'urlString': 'headline/T1348647853363',
		'replyUrl': '3g_bbs',
	},
	{
		'title': 'NBA',
		'urlString': 'list/T1348649145984',
		'replyUrl': 'sports_nba_bbs',
	},
	{
		'title': '手机',
		'urlString': 'list/T1348649654285',
		'replyUrl': 'mobile_bbs',
	},
	{
		'title': '移动互联',
		'urlString': 'list/T1351233117091',
		'replyUrl': 'mobile_bbs',
	},
	{
		'title': '娱乐',
		'urlString': 'list/T1348648517839',
		'replyUrl': 'auto_bbs',
	},
	{
		'title': '时尚',
		'urlString': 'list/T1348650593803',
		'replyUrl': 'lady_bbs',
	},
	{
		'title': '电影',
		'urlString': 'list/T1348648650048',
		'replyUrl': 'ent2_bbs',
	},
	{
		'title': '科技',
		'urlString': 'list/T1348649580692',
		'replyUrl': 'tech_bbs',
	},
]

export default class News extends Component {
	constructor(props) {
		super(props)
	};

	getListURL(index, fromIndex, count) {
		var newsConfig = NEWS_URLS[index];
		return BASE_URL + '/nc/article/' + newsConfig.urlString + '/' + fromIndex + '-' + count + '.html';
	};

	getNewsDetailURL(docID) {
		return BASE_URL + '/nc/article/' + docID + '/full.html';
	};

	getListTitle(index) {
		return NEWS_URLS[index].title;
	};
};