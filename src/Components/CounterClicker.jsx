import {Component} from "react";


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
                    Counter Clicker
                </h3>
                <br />
                <div className="scoreboard">
                    Total clicks:
                    <span className="scoreboard-count">
                        {this.state.clicks}
                    </span>
                </div>
                <button className="btn-clicks" onClick={this.handleClicker}>
                    Click Me
                </button>
                <button className="btn-clicks-rest" onClick={this.handleRestore}>
                    Restore
                </button>
            </div>
        )
    }
}

export default CounterClicker;
