import {Component} from "react";
import cursorIcon from "./../assets/cursor.png";
import "./CounterClicker.css";

class CounterClicker extends Component {


    constructor() {
        super();
        this.handleClicker = this.handleClicker.bind(this);
        this.handleRestore = this.handleRestore.bind(this);
    }

    state = {
        clicks: 0
    }

    handleClicker() {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    handleRestore() {
        this.setState({ clicks: this.state.clicks * 0 })
    }

    render() {
        return (
            <div className="clicks-container">
                <h3 className="clicker-title">
                    Counter Clicker <img src={cursorIcon} alt="cursor icon" />
                </h3>
                <div className="scoreboard">
                    <span className="scoreboard-count">
                        {this.state.clicks}
                    </span>
                </div>
                <button className="btn-clicks" onClick={this.handleClicker}>
                    Click Me
                </button>
                <button className="btn-clicks btn-reset" onClick={this.handleRestore}>
                    Restore
                </button>
            </div>
        )
    }
}

export default CounterClicker;
