import { useState } from "react";
import "./App.css";
import Chapters from "./components";
import RevelationOrderComp from "./components/revealOrder";
import QuranSearch from "./components/quranSearch";
// import { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  const [showBasedOnRevelation, setShowBasedOnRevelation ] = useState(true)

  const toggleShowBasedOnRevelation = () => {
    setShowBasedOnRevelation((prev)=>!prev)
  }

  return (
    <div>
      <div>
        <QuranSearch />
      </div>
      <button onClick={toggleShowBasedOnRevelation} className="border-primary">
        {" "}
        {!showBasedOnRevelation ? " Revelation Order" : "Compilation Order"}
      </button>
      {showBasedOnRevelation ? <Chapters /> : <RevelationOrderComp />}
    </div>
  );
}

export default App;
