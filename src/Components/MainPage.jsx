import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
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

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/buttons" element={<Buttons />} />
                            <Route path="/calculator" element={<Calculator />} />
                            <Route path="/clicker" element={<CounterClicker />} />
                        </Routes>
                    </BrowserRouter>

                    
                        <div className="menu">
                            <ul className="menu-inner">
                                <li className="menu-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/buttons">Buttons</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/calculator">Calculator</NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/clicker">Clicker</NavLink>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        )
    }


export default MainPage;
