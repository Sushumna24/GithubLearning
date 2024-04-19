import React,{Component} from 'react';
class ClassCounter extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            count:0
        }
    }
        // incrementCount=()=>{
        //     this.setState({
        //         count:this.state.count+1
        //     })
        // }
        incrementCount=()=>
        {
            this.setState(prevState=>{
                return{
                    count:prevState.count+5
                }
            })
        }
    render()
    {
        return (
            <div>
                <center><p style={{ position: 'absolute', top: 0, left: 0,marginLeft:300,fontSize:18}}><br></br><br></br><br></br>A counter implemented using class components in React is a component that tracks and displays a numerical value, typically starting from zero, and provides functionality to increment this value through user interactions.</p></center>
               <p style={{fontSize:30,fontWeight:'bold',color:'blue',fontFamily:'Times New Roman'}}>Increment count to 5 using class components</p>
                <center><button style={{color:'white',backgroundColor:'blueviolet',padding: '10px 20px'}} onMouseEnter={(e) => { e.target.style.backgroundColor = 'purple'; }} 
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'blueviolet'; }} onClick={this.incrementCount}>Count {this.state.count}</button></center>
            </div>
        )
    }
}
export default ClassCounter