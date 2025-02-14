import { useState } from "react";
import "./App.css";

function App() {
  const grid = [
    ["X", "X"],
    ["X", "X"],
  ];
  const [gridState, setGridState] = useState(grid);

  const handleColClick = (row, col) => {
    setGridState((prevGrid)=>(
      prevGrid.map((r, rowIndex)=>(
        rowIndex===row? 
          r.map((c,colIndex)=>(
            colIndex===col?
            c==="X"?"O":"X"
            : c
          ))
        : r
      ))
    ))
  };

  return (
    <div className="grid">
      {gridState.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div className="col" key={colIndex}
              onClick={()=>{handleColClick(rowIndex, colIndex)}}
            >
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
