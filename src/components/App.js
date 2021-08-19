import React,{useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[allSushis, setAllSushi] = useState([])
  const [start, setStart] = useState(0)
  
  const DisplaySushi = allSushis.slice(start, start+4);
  const forwardSushi=()=> setStart(start+4)
  
  useEffect(() => {
  fetch(API)
  .then(response => response.json())
  .then(sushiData => setAllSushi(sushiData));
  
    
  }, [])

  function eatSushi (sushi){
  console.log(sushi)
  }

  return (
    <div className="app">
      <SushiContainer allSushis={DisplaySushi} forwardSushi={forwardSushi} eatSushi={eatSushi}/>
      <Table  />
    </div>
  );
}

export default App;
