import React, { Component } from 'react'




class ClassComp extends Component {

    constructor() {
        super()
        this.state = {
            message: "hello brother"
        }
    }
    change() {
        debugger;
        if(this.state.message == "hello brother"){
            this.setState({
                message: "how are you?"
            })
        }
        else{
            this.setState({
                message: "hello brother"
            })
        }

    }

    render() {
        return (
            <div>
                <h2> class component {this.state.message}</h2>
                <button onClick={() => this.change()}> change message</button>
            </div>
        )
    }
}

export default ClassComp