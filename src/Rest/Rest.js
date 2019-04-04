import React, { Component } from 'react'

export default class Rest extends Component {
    state = {
        data: [
            { name: "Biryani", count: 0 },
            { name: "Chicken", count: 0 },
            { name: "Fired Rice", count: 0 },
            { name: "Noodles", count: 0 },
            { name: "Pav Vada", count: 0 },
            { name: "Dosa", count: 0 },
        ],
        orders: []
    };
    less = (key) => {
        if (this.state.data[key].count > 0) {
            this.state.data[key].count -= 1;
            this.setState({ data: this.state.data })
        };
    };
    more = (key) => {
        this.state.data[key].count += 1;
        this.setState({ data: this.state.data });
    }
    handleOrder = () => {
        let updatedOrders = this.state.data.filter(val => {
            if (val.count > 0) {
                return val;
            };
        });
        this.setState({ orders: updatedOrders })
    }
    render() {
        return (
            <div style={{ marginLeft: '50px' }}>
                {
                    this.state.data.map((val, index) =>
                        <div key={index}>
                            <h1>{val.name}</h1>
                            {val.count}&nbsp;
                            <button onClick={() => this.less(index)}>-</button>
                            <button>{val.count}</button>
                            <button onClick={() => this.more(index)}>+</button>
                        </div>
                    )
                }
                <button onClick={this.handleOrder}>OrderNow</button>
            </div>
        )
    }
}
