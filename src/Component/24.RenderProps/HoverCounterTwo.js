import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hover {count} Times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo


// Render props refers to technique for sharing code between React components 
// using a prop whose value is function