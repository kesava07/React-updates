import React, { Component } from 'react'
import Header from '../Header/Header';
import ComponentB from './ComponentB';

class ComponentA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "chenna kesava"
        }
        console.log("Cmp A Constructor")
    }
    static getDerivedStateFromProps() {
        console.log("Cmp A getDerivedStateToProps")
        return null;
    };
    shouldComponentUpdate() {
        console.log("Cmp A shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log("Cmp A getSnapshotBeforeUpdate")
        return null;
    };
    componentDidUpdate() {
        console.log("Cmp A componentDidUpdate")
    };
    componentDidMount() {
        console.log("Cmp A componentDidMount")
    };
    componentWillUnmount(){
        console.log("Cmp A Unmounting")
    }
    handleUpdate = () => {
        this.setState({ name: "Updated state" })
    }
    componentDidCatch(error , errorInfo){
        console.log(error , errorInfo,"chenna")
    }
    render() {
        console.log("Cmp A Render")
        return (
            <div>
                <Header />
                <h1>Component A</h1>
                <button onClick={this.handleUpdate}>Update Component</button>
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA
