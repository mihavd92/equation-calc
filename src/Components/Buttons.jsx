import {Component} from "react";
import "./Buttons.css";

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
    }

    state = {
        className: 'green'
    }

    // toggleClass() {
    //     this.state = this.setState({ state: this.state.className = 'green' });
    //     // this.state.className === 'green' ? this.state.className = this.setState({ state: this.state.className = 'red'}) : console.log('error')
    // }
    // Якщо вложимо фунцію в функцію? Зробимо перевірку, що якщо в стейта значення одне,
    // то тогл буде інший. А перед цим пропишемо 2 тогла - під 'ред' і під 'грін'

    toggleRed() {
        this.state = this.setState({ state: this.state.className = 'red' })
    }

    toggleGreen() {
        this.state = this.setState({ state: this.state.className = 'green' })
    }

    toggleClass() {
        if (this.state.className === 'red') {
            this.toggleGreen()
        } else if (this.state.className === 'green') {
            this.toggleRed()
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
                    <button className={this.state.className} onClick={this.toggleClass}>Click Me</button>
                </div>
            </div>
        )
    }
}

export default Buttons;
