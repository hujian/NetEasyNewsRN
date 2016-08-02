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
    ListView
} from 'react-native';

const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

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
    }

    pressRow(rowData, sectionID, rowID) {
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight
                onPress = {() => this.pressRow(rowData, sectionID, rowID)}
            >
                <Text>{rowData}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style = {style.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow.bind(this)} 
                >
                </ListView>
            </View>
        )
    }
}