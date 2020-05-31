import React, { Component } from 'react'
import ChildComponent from '../8.)MethodAsProps/childComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName : "Parent"
        }

        this.greetParent = this.greetParent.bind(this) 

        //Since we are using this keyword in method, we need to bind it in constructor
    }
    

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
