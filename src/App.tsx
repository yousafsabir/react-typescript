import "./App.css";

function App() {
    const name: string = "Yousaf";
    const age: number = 19;
    const isMarried: boolean = false;

    const aFunction = (name: string): void => {
        console.log("name:", name);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => aFunction("Yousaf")}>click</button>
            </header>
        </div>
    );
}

export default App;
