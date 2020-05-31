import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class ReactPortal extends Component {
    render() {
        return  ReactDOM.createPortal(
            <div>
                React Portal
            </div>,
            document.getElementById("portal-root")
        )
    }
}

export default ReactPortal
