import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
            this.refComp = React.createRef()
    }
    

    focusInput = () => {
        this.refComp.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.refComp}></input>
            </div>
        )
    }
}

export default Input
