import React, { Component } from 'react'
import Login from './Memos/Login';
import Profile from './Memos/Profile';
import Header from '../Header/Header';


export default class Memo extends Component {
    state = {
        isAuth: false
    }
    logOut = () => {
        this.setState({ isAuth: false });
    }
    logIn = () => {
        this.setState({ isAuth: true });
    }
    render() {
        return (
            <div>
                <Header />
                <h1>React.memo()</h1>
                <Login
                    authenticated={this.state.isAuth}
                    onLogIn={this.logIn}
                    onLogOut={this.logOut}
                />
                <Profile authenticated={this.state.isAuth} />
            </div>
        )
    }
}
