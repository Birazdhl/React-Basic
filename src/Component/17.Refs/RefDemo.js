import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();

        // this.cbRef = null

        // this.setRef = element => {
        //     this.cbRef = element
        // }

        
    }
    
    componentDidMount(){

        //Old Method
        // this.cbRef.focus()


        // new method
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    onClickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <br />
                 {/* <input type="text" ref={this.setRef}></input> */}
                <button onClick={this.onClickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo


// Refs makes access diretly to DOM nodes