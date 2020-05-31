import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

class PureComp extends Component {
    static propTypes = {

    }

    render() {
        console.log("Pure Comp render")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp


// Pure Component implements 'shouldComponentUpdate' with shallow proos and state comparison


// shallaw components - if 'a' and 'b' have same value and are of same type

//In pure component when the state value is different from previous state value,then only it re-renders