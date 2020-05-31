import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

export class PureComp extends PureComponent {
    static propTypes = {

    }

    render() {
        console.log("Pure Comp render")
        return (
            <div>
                Pure Component
            </div>
        )
    }
}

export default PureComp
