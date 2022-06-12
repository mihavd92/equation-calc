import {Component} from "react";
import "./Buttons.css";

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
    }

    state = {
        className: 'water'
    }


    toggleCola() {
        this.state = this.setState({ state: this.state.className = 'cola' })
    }

    toggleWater() {
        this.state = this.setState({ state: this.state.className = 'water' })
    }

    toggleClass() {
        if (this.state.className === 'cola') {
            this.toggleWater()
        } else if (this.state.className === 'water') {
            this.toggleCola()
        } else {
            console.log('Error')
        }
    }


    render() {
        return (
            <div>
                <p className="button-title">
                    In this app on click Button change color
                </p>
                <div className="buttons-container">
                    <button className={this.state.className} onClick={this.toggleClass}>
                        <span className="cola-style">Cola</span> or
                        <span className="water-style"> Water</span>?
                    </button>
                </div>
            </div>
        )
    }
}

export default Buttons;
