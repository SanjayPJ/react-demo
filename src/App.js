import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
    return (
        <div className="App border-red">
            <h1>Component 1</h1>
            <Header data="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi facere, odio culpa placeat, nobis modi quae amet asperiores dolores praesentium tenetur deleniti suscipit debitis incidunt necessitatibus sint sunt aliquid!" />
            <Content data="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi repellendus eligendi provident, error enim corrupti consequuntur dolorem repudiandae officia ipsa debitis itaque modi illum esse! Itaque, quasi? Officia, sit non." />
        </div>
    );
}

export default App;
