import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            skills: 'angular'
        }
    }



    handleUsername = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSelect = (event) => {
        this.setState({
            skills: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert (`${this.state.userName} ${this.state.comments} ${this.state.skills}`)
        event.preventDefault()
    }

    render() {
    const{username,comments,skills} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={username} onChange={this.handleUsername}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleComment}></textarea>
                </div>

                <div>
                    <label>Skills</label>
                    <select value={skills} onChange={this.handleSelect}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
