/**
 * @brief:  控件测试页
 * @author: hj
 * @date:   2016-08-03
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableHighlight,
} from 'react-native';

const style = {
    container: {
        flex: 1,
        marginTop: 40,
    },
    row: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default class TestWidgetPage extends Component {
    constructor(props) {
        super(props)

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        var titles = ['频道列表滚动条']

        this.state = {
            dataSource: ds.cloneWithRows(titles)
        }
    }

    pressRow(rowData, sectionID, rowID) {
        if (rowID == 0) {
        }
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View >
            <TouchableHighlight
                style = {style.row}
                underlayColor = '#dbdbdb'
                onPress = {
                    () => {this.pressRow(rowData, sectionID, rowID)}
                }
            >
                <Text>
                    {rowData}
                </Text>
            </TouchableHighlight>
            </View>
        )
    }

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow.bind(this)}

                style = {style.container}
            >
            </ListView>
        );
    }
};