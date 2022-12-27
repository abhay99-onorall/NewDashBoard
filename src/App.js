import { useState } from "react";
import DashChart from "./Components/Dash/DashChart/DashChart";
import DashCreator from "./Components/Dash/DashCreator/DashCreator";
import Nav from "./Components/Nav/Nav";

function App() {
  const [select, setSelected] = useState(1)

  return (
    <div style={{display: "flex"}}>
      <Nav setSelected={setSelected} />
      {
        select === 1 ? <DashChart/> : select === 2 ? <DashCreator/> : (" ")
      }
    
    </div>
  );
}

export default App;
