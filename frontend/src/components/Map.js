import Piece from "./Piece";

export default function Map({ sheetData, analyzedData }) {

  if(sheetData.length === 0) return;

  const number = analyzedData.length;

  const numRows = sheetData.length;
  const numCols = sheetData[0].length;

  let reachables = new Array(numRows * numCols - 1).fill(false);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (analyzedData.includes(`(${i}, ${j})`)) {
        reachables[i * numRows + j] = true;
      }
    }
  }

  return (
    <div>
      <div className="flex justify-center m-2">number: {number}</div>

      <div className="flex justify-center">
        <div className="flex flex-col">
          {sheetData.map((rows, i) => (
            <div className="flex flex-row">
              {rows.map((elem, j) => (
                <Piece elevation={elem} reachable={reachables[i * numRows + j]} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center m-2"> {analyzedData}</div>
    </div>
  );
}
