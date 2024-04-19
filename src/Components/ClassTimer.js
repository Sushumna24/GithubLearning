// import React from "react";
// import { Component } from "react";
// class ClassTimer extends Component
// {
//     interval
//     constructor(props)
//     {
//         super(props)
//         this.state=
//         {
//             timer:0
//         }
//     }
//     componentDidMount()
//     {
//         this.interval=setInterval(()=>{
//             this.setState(prevState=>({timer:prevState.timer+1}))
//         },1000
           
//         )
//     }
//     componentWillUnmount()
//     {
//         clearInterval(this.interval)
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h2>Clicking on "StopTimer" Will stop the timer</h2>
//                 <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Class Timer: {this.state.timer}</p>
//                 <br>
//                 </br>
                
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px',cursor: 'pointer',}} onClick={()=>clearInterval(this.interval)} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
//     onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }}>StopTimer</button>
//             </div>
//         )
//     }
// }
// export default ClassTimer




import React, { Component } from "react";

class ClassTimer extends Component {
    interval;
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            isTimerRunning: true
        };
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({ timer: prevState.timer + 1 }));
        }, 1000);
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    handleToggleTimer = () => {
        if (this.state.isTimerRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
        this.setState((prevState) => ({
            isTimerRunning: !prevState.isTimerRunning
        }));
    };

    render() {
        return (
            <div>
                                                        <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:350,fontSize:18}}><br></br><br></br><br></br>Build to handle timer, stopwatch, and time logic/state in react component.</p></center>

                <h2>Clicking on "StopTimer" Will stop the timer</h2>
                <h2>Clicking on "startTimer" Will start the timer</h2>
                <p style={{ fontSize: 30, fontWeight: "bold", color: "blue", fontFamily: "Times New Roman" }}>
                    Class Timer: {this.state.timer}
                </p>
                <br></br>
                <button
                    style={{ color: "white", backgroundColor: "blueviolet", padding: "10px 20px", cursor: "pointer",marginLeft:'200px' }}
                    onClick={this.handleToggleTimer}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "purple";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "blueviolet";
                    }}
                >
                    {this.state.isTimerRunning ? "Stop Timer" : "Start Timer"}
                </button>
            </div>
        );
    }
}

export default ClassTimer;
































