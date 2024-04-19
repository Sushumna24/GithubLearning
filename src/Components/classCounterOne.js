import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        };
    }

    componentDidMount() {
        // Set document title when component mounts
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        // Update document title when count state changes
        if (prevState.count !== this.state.count) {
            console.log("Document updated");
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>ClassCounterOne</p>
                {/* Input field bound to state */}
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value });
                    }}
                />
                {/* Button to increment count */}
                <button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count}
                </button>
            </div>
        );
    }
}

export default ClassCounterOne;
