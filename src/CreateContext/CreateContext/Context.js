import React, { Component } from 'react';
import Login from '../Login';
import Profile from '../Profile';
import AuthContext from './AuthContext';
import Header from '../../Header/Header';



export default class CnText extends Component {
    state = {
        isAuth: false
    };
    isToggle = () => {
        this.setState(prevState => {
            return {
                isAuth: !prevState.isAuth
            }
        })
    }
    render() {
        return (
            <AuthContext.Provider value={{ isAuth: this.state.isAuth, isToggle: this.isToggle }}>
                <Header />
                <h1>React.Context()</h1>
                <Login />
                <Profile />
            </AuthContext.Provider>
        )
    }
}
