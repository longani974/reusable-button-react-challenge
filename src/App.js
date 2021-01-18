import "./App.css";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <div>
                <Button text="Button" />
            </div>
            <div>
                <Button text="Outline" variant="outline" />
            </div>
            <div>
                <Button text="Text" variant="text" />
            </div>
        </div>
    );
}

export default App;
