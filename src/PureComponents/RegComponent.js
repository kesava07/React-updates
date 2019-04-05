import React, { Component } from 'react'

export default class RegComponent extends Component {
    render() {
        console.log("**** reg cmp *******")
        return (
            <div>
                <h1>Reg component : {this.props.name}</h1>
            </div>
        )
    }
}
