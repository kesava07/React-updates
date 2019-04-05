import React, { PureComponent } from 'react'
import RegComponent from './RegComponent';
import PureCmp from './PureComponent';
import Header from '../Header/Header';

export class Parent extends PureComponent {
    state = {
        name: "chenna"
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "chenna" })
        }, 2000)
    }
    render() {
        console.log("************** Parent CMP ********************")
        return (
            <div>
                <Header />
                <h1>Pure component</h1>
                <RegComponent name={this.state.name} />
                <PureCmp name={this.state.name} />
            </div>
        )
    }
}

export default Parent
