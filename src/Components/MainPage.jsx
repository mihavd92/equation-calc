import { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./MainPage.css";




class MainPage extends Component {
    render() {
        return (
            <div className="main-page-container">
                <h1>Simple React App's</h1>
                <h3>About Me</h3>
                <p>Hello everyone! My name is Mykhaylo Vdovychenko, I'm front-end developer.</p>
                <p>On this page you can see several React projects.</p>
                <p>For example: equation calc, counter clicker and change style of button, on click.</p>
                <div className="menu">
                    <div className="menu-item">
                        <Link to="/">Home</Link>
                        <Link to="/equation-calc">Equation Calc</Link>
                        <Link to="/counter-clicker">Counter Clicker</Link>
                        <Link to="/button-style">onClick Button change Style</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainPage;