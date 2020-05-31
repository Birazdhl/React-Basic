import React, { Component, PureComponent } from 'react'
import MemoComp from "../16.Memo/Memo";

 class MemoParentComponent extends Component {
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

                <MemoComp name={this.state.name} />

            </div>
        )
    }
}

export default MemoParentComponent
