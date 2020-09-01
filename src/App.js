import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import Menu from "./components/Menu";
import About from "./components/About";

const lightMode = {
    color: "darkgray",
    backgroundColor: "whitesmoke",
};

const darkMode = {
    color: "darkgray",
    backgroundColor: "black",
};

const tropicalMode = {
    color: "coral",
    backgroundColor: "steelblue",
};

const monoAmberMode = {
    color: "#ffbf00",
    backgroundColor: "black",
    fontFamily: `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

const monoGreenMode = {
    color: "greenyellow",
    backgroundColor: "black",
    fontFamily: `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

export default () => {
    const [mode, setState] = useState("monoGreen");
    const theme = () => {
        switch (mode) {
            case "dark":
                return darkMode;
            case "light":
                return lightMode;
            case "tropical":
                return tropicalMode;
            case "monoAmber":
                return monoAmberMode;
            case "monoGreen":
                return monoGreenMode;
            default:
                return lightMode;
        }
    };

    return (
        <BrowserRouter>
            <div className="flex justify-center min-h-screen" style={theme()}>
                <div className="flex container border-l-2 border-r-2 border-current pr-1">
                    <div className="z-10">
                        <Menu setTheme={setState} />
                    </div>
                    <div>
                        <About />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
