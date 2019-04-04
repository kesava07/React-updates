import React, { Component } from 'react';

class App extends Component {
    state = {
        autoFocus: true,
        data: [
            { name: '', id: '' }
        ]
    };
    getInput = () => this.state.data.map((val, ind) => {
        return (
            < div key={ind}>
                <input
                    autoFocus={this.state.autoFocus}
                    onChange={(event) => this.changeVal(event, ind, 'name')}
                    value={val.name}
                    type='text'
                />
                <input
                    value={val.id}
                    onChange={(event) => { this.changeVal(event, ind, 'id') }}
                    type='text'
                /> &nbsp;{ind === 0 ? null : <button onClick={() => this.handleRemove(ind)} disabled={ind === 0}>X</button>}
                <br />
            </div>
        );
    });
    changeVal = (event, ind, ele) => {
        this.state.data[ind][ele] = event.target.value;
        this.setState({
            data: this.state.data
        });
    };
    add = () => {
        this.setState((prev) => {
            let last = prev.data[prev.data.length - 1];
            if (last.name && last.id) {
                return prev.data.push({ name: '', id: '' })
            } else {
                alert("please fill the details")
            }
        });
    };

    handleRemove = (ind) => {
        this.setState({ data: this.state.data.filter((val, index) => index !== ind) })
    }
    render() {
        return (
            <div>
                {this.getInput()}
                <button onClick={this.add}>add</button>
            </div>
        )
    }
};
export default App;