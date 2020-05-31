import React, { Component } from 'react'
import UpdatedComponent from '../23.HOC2/withCounter'


class HoverMouse extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver = {incrementCount}> {this.props.name} Hover {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverMouse,10)
