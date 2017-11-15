import React from 'react';
import styles from './Styles';
import {
    Text,
    View,
    Button
} from 'react-native';


class HomeScreen extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.pressed = this.pressed.bind(this);
    // }
    //
    // pressed(){
    //     const { navigate } = this.props.navigation;
    //     navigate('Settings');
    // }
    static navigationOptions= ({navigation}) => ({
        title: 'Feed',
        headerRight: <Button
            onPress={() => navigation.navigate('Settings')}
            title="Settings"
        />
    });
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Hello, Navigation Chat App!!</Text>
                <Button
                    onPress={() => navigate('Chat', {user:'Mehrab'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

export default HomeScreen;