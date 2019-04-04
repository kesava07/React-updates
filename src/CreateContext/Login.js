import React from 'react';
import AuthContext from './CreateContext/AuthContext';


export default class Login extends React.Component {
    static contextType = AuthContext
    render() {
        return (
            <button onClick={this.context.isToggle}>
                {this.context.isAuth ? "Login" : "Logout"}
            </button>
        )
    }
};