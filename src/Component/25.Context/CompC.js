import React, { Component } from 'react'
import {UserConsumer} from './ContextC'

class CompC extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (player) => {
                           return <h2> Hello My Name is {player.name} </h2>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default CompC
