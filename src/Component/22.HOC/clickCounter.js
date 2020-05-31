import React, { Component } from 'react'
import UpdatedComponent from '../23.HOC2/withCounter'

class ClickCounter extends Component {
  
    
    render() {
        const {incrementCount, count} = this.props
        return (
            <div>
                <button onClick={incrementCount}> {this.props.nickName} Click {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)
