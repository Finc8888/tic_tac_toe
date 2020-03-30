import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
class ButtonCounter extends Component{
    state = {
        counter:0,
    }
    handleClick = () =>{
        this.setState(({counter})=>{ return(
            {counter:++counter,}
        )})
    }
    render(){
        const {counter} = this.state;
        return(
            <div>
                <div>Количество лайков:{counter}</div>
                <Button variant="danger" className="counter" onClick={this.handleClick} >Like</Button>
            </div>
        )
    }
}
export default ButtonCounter;