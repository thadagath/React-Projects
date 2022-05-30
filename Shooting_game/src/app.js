import React from 'react';

export default class App extends React.Component{

    constructor(props){
       super(props);
       this.state= {
            score1: 100,
            score2: 100
        }
        this.decrement1 = this.decrement1.bind(this);
        this.decrement2 = this.decrement2.bind(this);
    }    
    componentDidMount = () => {
      const getBlog = JSON.parse(localStorage.getItem("blogs"));
      this.setState({
          blogs: getBlog ? getBlog : []
        });
    };
  
  decrement1(){
    this.setState({ 
        score1:this.state.score1-Math.floor((Math.random() * 10) + 1),
});
  }
  decrement2(){
    this.setState({ 
        score2:this.state.score2-Math.floor((Math.random() * 10) + 1),
});
  }

  render(){

    return(
   <div>
       <div>
<button onClick={decrement2()}>Player-1</button>
    <h1>Player-1 score : {this.state.score1} </h1>
  </div>
  <br/>
  <div>
<button onClick={decrement1()}>Player-2</button>
    <h1>Player-2 score : {this.state.score2} </h1>
  </div>
   </div>
   );
  }
}
