import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'


 class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
                name :"Biraz"
        }
    }
    
    componentDidMount() {
        setInterval(() => this.setState({
            name: "Biraz"
        }),2000)
    }

    render() {
        console.log("********************Parent Component**********************")
        return (
            <div>
                Parent Component
                
                {<PureComp name={this.state.name} /> }
                { <RegComp name={this.state.name} /> }      
            </div>
        )
    }
}

export default ParentComp
