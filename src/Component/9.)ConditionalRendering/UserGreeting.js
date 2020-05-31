import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
        };
    }



    render() {

        return this.state.isLoggedIn && <div>Welcome Biraz</div> 

        // return (this.state.isLoggedIn ? <div>Welcome Biraz</div> : <div>Welcome Guest</div>)

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Biraz</div>
        // }
        // else {
        //     message = <div>Hello Guest</div>
        // }
        // return (
        //     <div>{message}</div>
        // )


        //    if (this.state.isLoggedIn) return <div>Hello Biraz</div>;
        //    else {
        //      return <div>Hello Guest</div>;
        //    }
    }
}

export default UserGreeting
