
import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <h3 id="title">Clicky Memory Game</h3>
                <p id="inst">Click an image to begin.
                <br/>Earn points for each click, but don't pick the same image twice!</p>Score: {this.props.score}
            </nav>


        );
    }
}

export default Navbar;