import React, { useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Button } from "./components/Button";

const images = [
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
    "https://robohash.org/Archie",
];

function App() {
    const [page, setPage] = useState("about");
    const aboutPage = (e) => {
        e.preventDefault();
        console.log("about");
        setPage("about");
    };
    const imagePage = (e) => {
        e.preventDefault();
        console.log("images");
        setPage("images");
    };
    return (
        <div className="App">
            <Header aboutPage={aboutPage} imagePage={imagePage} />
            {page === "images" && <Section imageGrid={images} />}
            {page === "about" && (
                <>
                    <Section
                        title="Cat Images"
                        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <Button text="Begin" onClick={imagePage} />
                </>
            )}
        </div>
    );
}

export default App;
