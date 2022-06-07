import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import "./MainPage.css";
import Calculator from "./Calculator";
import CounterClicker from "./CounterClicker";
import Buttons from "./Buttons";


function MainPage() {



        return (
            <div className="main-page-container">
                <h1>Simple React App's</h1>
                <h3>About Me</h3>
                <p>Hello everyone! My name is Mykhaylo Vdovychenko, I'm front-end developer.</p>
                <p>On this page you can see several React projects.</p>
                <p>For example: equation calc, counter clicker and change style of button, on click.</p>

                <div className="menu-container">

                    <Router>
                        <div className="menu">
                            <ul className="menu-inner">
                                <li className="menu-item">
                                    <Link to="/" >Home</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/buttons" >Buttons</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/calculator" >Calculator</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/clicker" >Clicker</Link>
                                </li>
                            </ul>
                        </div>

                        <Switch>
                            <Route path="/main">
                                <MainPage />
                            </Route>
                            <Route path="/buttons">
                                <Buttons />
                            </Route>
                            <Route path="/calculator">
                                <Calculator />
                            </Route>
                            <Route path="/clicker">
                                <CounterClicker />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }


export default MainPage;
