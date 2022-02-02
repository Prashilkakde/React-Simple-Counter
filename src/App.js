import React from "react";

class App extends React.Component{

    constructor(){
      super();
     // this.count = 0;
      this.state={
       count:0
      }
      // this.incrementCount = this.incrementCount.bind(this);
      // this.incrementCount = this.incrementCount.bind(this);

    }

    incrementCount(){
      //state are mutable- can not change
        this.setState({
        count : this.state.count +1
        });
      
    }

    decrementCount(){
      this.setState({
        count:this.state.count-1
      });
    }

    render(){
    return(
      <>
      <h1>{this.state.count}</h1>
      <button onClick={() =>{
        this.incrementCount();
        }}>
          +
        </button>
      <button onClick={() =>{
        this.decrementCount();
      }}>
        -</button>
     </>
    )
  }
}
export default App;