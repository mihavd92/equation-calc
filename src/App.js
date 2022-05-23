import './App.css';
import Calculator from "./Components/Calculator";
import CounterClicker from "./Components/CounterClicker";
import Buttons from "./Components/Buttons";

function App() {
    return (
        <div className="App">
            <Calculator/>
            <CounterClicker/>
            <Buttons />
        </div>
    );
}

export default App;
