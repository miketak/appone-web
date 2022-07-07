import React from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <h2>Stuff</h2>
      </main>
    </React.Fragment>
  );
}

export default App;
