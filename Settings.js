import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';

class Settings extends Component {
    static navigationOptions =({navigation}) => ({
        title: `Settings123`
    });
    render() {
        return (
            <ScrollView>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value="enter value"
                />
            </ScrollView>
        );
    }
}

export default Settings;