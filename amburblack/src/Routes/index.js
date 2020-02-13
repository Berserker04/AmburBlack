import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';

import Login from "../Views/Login";
import Registro from "../Views/Registro";
import Inicio from "../Views/Inicio";

const MainNavigator = createStackNavigator({
    Inicio: {
        screen: Inicio,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Registro: {
        screen: Registro,
        navigationOptions: {
            header: null,
        }
    }
}, {
    initialRouteName: "Login",
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer navigation={this.props.navegation} />
        );
    }
}