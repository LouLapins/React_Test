import React, { Component } from 'react'

export default class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "green",
                    value: ""}

        this.changeColor = this.changeColor.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

   componentDidMount() {
        const color = localStorage.getItem("colorA");
        this.setState({ color: color });
   }

   componentDidUpdate() {
        localStorage.setItem("colorA", this.state.color);
   }

   changeColor() {
       this.setState((prevState) => {
        if (prevState.color !== "pink") {
            return { color: "pink" };
        } else {
            return { color: "green" };
        }
        });
       }
   
    handleInput(event) {
        this.setState({ value: event.target.value });
    }

    render() {
       
        return (
            <div className={"component"} id={this.state.color}>
                <span className={"component_title"}> A </span>
                <p>Hello {this.state.value}</p>
                <input className={"name_field"} type="text" value={this.state.value} onChange={this.handleInput} placeholder="Type your name"></input>
                <button className={"color_btn"} onClick={this.changeColor}>Color</button>
            </div>
        )
    }
}