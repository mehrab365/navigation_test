// import React from 'react';
import {StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './Home'
import ChatScreen from './Chat'
import RecentChatsScreen from './RecentChats';
import AllContactsScreen from './AllContacts';
import Settings from './Settings';

const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        },
    },
});
const WelcomeScreenNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: {screen: ChatScreen},
    // Settings:{screen: SettingsStack}
    Settings: {screen: Settings}
});
const Tabs = TabNavigator({
    Welcome: {screen: WelcomeScreenNavigator,  navigationOptions: { tabBarLabel: 'Welcome' }},
    Recent: { screen: RecentChatsScreen},
    All: { screen: AllContactsScreen},

});



const RootNavigator = StackNavigator(
    {
        Tabs: { screen: Tabs },
        // Settings:{screen: SettingsStack}
    }
    , {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default RootNavigator;