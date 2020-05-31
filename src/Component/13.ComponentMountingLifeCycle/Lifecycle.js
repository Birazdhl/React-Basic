import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name : "Biraz"
        }
        console.log("LifecycleA Constructor")
    }
    
    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA ComponentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycyleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log("LifecycleA Render")
        return (
            <div>
                <p>LifecycleA</p>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default Lifecycle
