import {Component} from "react";
import "./Calculator.css";


class Calculator extends Component {
    state = {
        a: '',
        b: '',
        c: '',
        answer: ''
    }

    handleInputChange = e => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const a = this.state.a === '' ? 1 : +this.state.a;
        const b = this.state.b === '' ? 1 : +this.state.b;
        const c = this.state.c === '' ? 1 : +this.state.c;

        let x, x1, x2;

        const D = (Math.pow(b, 2) - 4 * a * c);

        if (D > 0) {
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);
            this.setState({ answer: `Equation has 2 root's: X1=${x1} and X2=${x2}` })
        } else if (D === 0) {
            x = ( -b / (2 * a))
            this.setState({ answer: `Equation has 1 root: X=${x}` })
        } else if (D < 0) {
            this.setState({ answer: 'Equation has no roots' })
        }
    }

    handleClear = e => {
        e.preventDefault();

        this.setState({
            a: '',
            b: '',
            c: '',
            answer: 'cleared'
        })
    }



    render() {
        return (
            <div className="container">
                Quadratic Equation Calculator 
                <br />
                <span className="example-equation">Ax<sup>2</sup>+Bx+C=0</span>
                <form className="calculator-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="abc-field"
                        placeholder="A"
                        value={this.state.a}
                        onChange={this.handleInputChange}
                        name="a"
                    />
                    <input
                        className="abc-field"
                        placeholder="B"
                        value={this.state.b}
                        onChange={this.handleInputChange}
                        name="b"
                    />
                    <input
                        className="abc-field"
                        placeholder="C"
                        value={this.state.c}
                        onChange={this.handleInputChange}
                        name="c"
                    />
                    <br />
                    <span className="result-inner">
                        Result: 
                    <textarea
                        className="solution"
                        value={this.state.answer}
                    />
                    </span>
                    <div className="btns-inner">
                    <button
                        type="submit"
                        className="btn"
                        onClick={this.handleSubmit}>
                        Calc
                    </button>
                    <button
                        type="submit"
                        className="btn"
                        onClick={this.handleClear}>
                        Clear
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Calculator;
