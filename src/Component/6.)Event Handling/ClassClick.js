import React, { Component } from 'react'

class ClassClick extends Component {

    onButtonClick(){
        console.log("Lionel Messi");
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Click</button>
            </div>
        )
    }
}

export default ClassClick
