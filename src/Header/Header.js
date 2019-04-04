import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/">Memo</NavLink> &nbsp; | &nbsp;
                    <NavLink to="/context">context</NavLink> &nbsp; | &nbsp;
                    <NavLink to="/Hooks">Hooks</NavLink>
                </nav>
            </div>
        )
    }
}
