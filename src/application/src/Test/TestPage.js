/**
 * @brief:  测试用例主入口
 * @author: hj
 * @date:   2016-08-02
 */
'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';
import MainPage from '../MainPage';
import TestWidgetPage from './TestWidgetPage';

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    row: {
        flex: 1,
        height: 30,
    }
};

export default class TestPage extends Component {
    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        let titles = ['正常流程', '控件', 'API'];

        this.state = {
            dataSource: ds.cloneWithRows(titles)
        };

        this.pressRow(0, 1);
    }

    pressRow(sectionID, rowID) {
        var {navigator} = this.props;
        var component;

        if (rowID == '0') {
            component = MainPage;
        } else if (rowID == '1') {
            component = TestWidgetPage;
        }

        navigator.push({
            name: '',
            component: component,
        });
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight
                onPress = {(() => this.pressRow(sectionID, rowID)).bind(this)}
                underlayColor = '#dbdbdb'
            >
                <Text style = {style.row}>{rowData}</Text>
            </TouchableHighlight>
        )
    }

    renderSeparator(rowID, sectionID, adjacentRowHighlighted) {
        return (
            <View
                key = {`${sectionID}-${rowID}`}
                style = {{
                    height: 0.5,
                    backgroundColor: '#f7f8f9', 
                    marginRight: 4,
                }}
            >
            </View>
        )
    }

    render() {
        return (
            <View style = {style.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow.bind(this)} 
                    renderSeparator = {this.renderSeparator}
                >
                </ListView>
            </View>
        )
    }
}