import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Building extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://sheetsu.com/apis/v1.0su/7482a2cc43c7")
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({ data: json });
            });
    }

    // renderData() {
    //     return this.state.data.map((row) =>
    //         <div key={row.id}>{row.name} {row.score}</div>
    //     );
    // }

    render() {
        return (
            <div>
                {
                    this.state.data.map((row) => {
                        return (
                            <div key={row.id}>{row.id} {row.name}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Building;