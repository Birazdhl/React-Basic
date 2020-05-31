import React, { Component } from 'react'
import Input from './Input'

export class InputRef extends Component {

    constructor(props) {
        super(props)
        this.inputCompRef = React.createRef()        
    }
    

    onClickHandler =() => {
        this.inputCompRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.inputCompRef} />
                <button onClick={this.onClickHandler}>Click</button>
            </div>
        )
    }
}

export default InputRef
