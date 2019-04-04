import React from 'react';
import AuthContext from './CreateContext/AuthContext';

export default class Profile extends React.Component {
    static contextType = AuthContext;

    // componentDidMount() {
    //     console.log(this.context)
    // };

    render() {
        return (
            <div>
                {this.context.isAuth ? "You are logged in" : "You are logged out"}
            </div>
        )
    };
};