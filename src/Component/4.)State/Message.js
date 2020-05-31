import React, {Component} from 'react'
import ReactDOM from 'react-dom';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : "Welcome Visistor",
            buttonText : "Subscribe",
            sub: 1
        }
    }

    changeMessage(){
        this.setState({
            message: this.state.sub==1 ? "Thank You for Subscribing" : "Welcome Visitor",
            buttonText: this.state.sub==1 ? "UnSubscribe" : "Subscribe",
            sub : this.state.sub==0? 1:0

        })
    }


    render(){
        return(
     <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>{this.state.buttonText}</button>
     </div>
        )
    }
}

export default Message