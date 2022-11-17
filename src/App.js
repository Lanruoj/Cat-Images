import React, { useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Button } from "./components/Button";

function App() {
    const [beginClicked, setBeginClicked] = useState(false);
    const beginApp = (e) => {
        e.preventDefault();
        setBeginClicked(true);
    };
    return (
        <div className="App">
            <Header />
            <Section
                title="Cat Images"
                body={
                    beginClicked
                        ? "Image generator"
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            />
            {beginClicked ? null : <Button text="Begin" onClick={beginApp} />}
            {/* <Main>
                <AboutSection />
                <GenerateForm />
                <ImageGrid />
            </Main> */}
        </div>
    );
}

export default App;
