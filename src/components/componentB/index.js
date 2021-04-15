import React, { Component } from 'react'

export default class ComponentB extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "green"}
        this.changeColor = this.changeColor.bind(this);
    }

   componentDidMount() {
        const color = localStorage.getItem("colorB");
        this.setState({ color: color });
   }

   componentDidUpdate() {
        localStorage.setItem("colorB", this.state.color);
   }

   changeColor() {
    this.setState((prevState) => {
     if (prevState.color === "green") {
         return { color: "pink" };
     } else {
         return { color: "green" };
     }
     });
    }

    render() {
        return (
            <div className={"component"} id={this.state.color}>
                <span className={"component_title"}> Component B </span>
                <button className={"color_btn"} onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}
