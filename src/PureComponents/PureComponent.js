import React, { PureComponent } from 'react'

export default class PureCmp extends PureComponent {
    render() {
        console.log("**** pure cmp *******")
        return (
            <div>
                <h1>Pure Component: {this.props.name}</h1>
            </div>
        )
    }
};
