import React, { Component } from 'react';
import Login from '../Login';
import Profile from '../Profile';
import AuthContext from './AuthContext';
import Header from '../../Header/Header';



export default class CnText extends Component {
    state = {
        isAuth: false,
        title: 'Context API',
        width: window.innerWidth
    };
    isToggle = () => {
        this.setState(prevState => {
            return {
                isAuth: !prevState.isAuth
            }
        })
    };
    componentDidMount = () => {
        document.title = this.state.title;
        window.addEventListener('resize', this.handleResize)
    };

    handleResize = () => {
        this.setState({ width: window.innerWidth })
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    componentDidUpdate() {
        document.title = this.state.title;
    }


    handleOnchange = (event) => this.setState({ title: event.target.value });

    render() {
        return (
            <AuthContext.Provider value={{ isAuth: this.state.isAuth, isToggle: this.isToggle }}>
                <Header />
                <h1>React.Context()</h1>
                <Login />
                <Profile />
                <input onChange={this.handleOnchange} placeholder="title" value={this.state.title} />
                <h1>Window width By class component: {this.state.width}</h1>
            </AuthContext.Provider>
        )
    }
}
