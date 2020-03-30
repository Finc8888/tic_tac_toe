import React from 'react';
let elementHi = <h1>Welcome to</h1>;
function Hi(props){
    return elementHi;
}
class GameLable extends React.Component{
    render(){
       return (
        <h1>{this.props.name}</h1>
       ); 
    }
}
class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div>
            <Hi/>
            <GameLable name = {this.props.name}/>
        </div>
    )
    }
}
export default Welcome;
