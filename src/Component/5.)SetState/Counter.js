import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
       count : 0
    }
}


    // increament = () => {
    //     this.setState(
    //     {
    //         count : this.state.count + 1
    //     },
    //      () => {console.log(this.state.count)}
    //     )
    //     console.log(this.state.count)
    // }
     //Second parameter (callBack function) in setState defines the process is to be called only after state value is updated


    increament = () => {
        this.setState( (prevState) => ({
          count : prevState.count + 1
        }),console.log(this.state.count))  
        
    }

    increamentFive()
    {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()

    }

    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={() => this.increamentFive()}> Increament</button>
            </div>
        )
    }
}

export default Counter
