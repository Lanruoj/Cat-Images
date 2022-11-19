import React, { useState } from "react";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Button } from "./components/Button";

function App() {
    const [page, setPage] = useState("home");
    const homePage = (e) => {
        e.preventDefault();
        setPage("home");
    };
    const imagePage = (e) => {
        e.preventDefault();
        setPage("images");
    };
    const fetchImages = (url) => {
        return fetch(url).then((data) => data.json());
    };
    return (
        <Main className="App" style={{ fontFamily: "Roboto" }}>
            <Header homePage={homePage} imagePage={imagePage} />
            {page === "images" && (
                <Section
                    title="Cat Images"
                    imageGrid={images}
                    fetchImages={fetchImages}
                />
            )}
            {page === "home" && (
                <>
                    <Section
                        title="Cat Images"
                        bodyText="Welcome to the Cat Images Generator! Simply press Begin and choose how many cats you would like to generate. Enjoy!"
                    />
                    <Button text="Begin" onClick={imagePage} />
                </>
            )}
        </Main>
    );
}

export default App;
