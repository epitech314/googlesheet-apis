import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [islandId, setIslandId] = useState(0);
  const [sheetData, setSheetData] = useState([]);
  const [analyzedData, setAnalyzedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5000/${islandId}`)
      .then((res) => {
        setSheetData(res.data.sheetData);
        setAnalyzedData(res.data.analyzedData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [islandId]);

  return (
    <div className="h-screen">
      <div className="flex gap-6 justify-center m-6">
        <div>Select an island: </div>
        <select className="w-32" onChange={(e) => setIslandId(e.target.value)}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <option value={index}> Island {index + 1}</option>
            ))}
        </select>
        <div>{isLoading && "loading ..."}</div>
      </div>

      <div className="flex justify-center">
        <Map sheetData={sheetData} analyzedData={analyzedData} />
      </div>
    </div>
  );
}

export default App;
