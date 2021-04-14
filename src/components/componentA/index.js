import React, { Component } from 'react'

export default class ComponentA extends Component {

    state = {color: "green"};

    changeColor = () => {
        this.setState({ color: "pink" });
    }

    render() {
        return (
            <div className={"component"} id={this.state.color}>
                <span className={"component_title"}> Component A </span>
                <button className={"color_btn"} onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}
