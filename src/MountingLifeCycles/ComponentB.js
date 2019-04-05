import React, { Component } from 'react';

class ComponentB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "chenna kesava"
        }
        console.log("Cmp B Constructor")
    }
    static getDerivedStateFromProps() {
        console.log("Cmp B getDerivedStateToProps")
        return null;
    };
    shouldComponentUpdate() {
        console.log("Cmp B shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log("Cmp B getSnapshotBeforeUpdate")
        return null;
    };
    componentDidUpdate() {
        console.log("Cmp B componentDidUpdate")
    };
    componentDidMount() {
        console.log("Cmp B componentDidMount")
    }
    componentWillUnmount(){
        console.log("Cmp B Unmounting")
    }
    render() {
        console.log("Cmp B Render")
        return (
            <div>
                <h1>Component B</h1>
            </div>
        )
    }
}

export default ComponentB
