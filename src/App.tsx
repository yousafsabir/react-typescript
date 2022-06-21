import React, { FC } from "react";
import "./App.css";
import Person from "./components/Person";

const App: FC = () => {
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
                <Person name="Yousaf" age={19} />
            </header>
        </div>
    );
};

export default App;
