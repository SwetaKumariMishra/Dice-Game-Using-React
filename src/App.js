import StartGame from "./components/StartGame";
import './App.css';
import PlayGame from "./components/PlayGame";
import { useState } from "react";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>
  {
    setIsGameStarted((prev => !prev))
  };


  return (
    <>
      {isGameStarted ? <PlayGame /> : <StartGame  toggle={toggleGamePlay}/>}
    </>
  );
}

export default App;
