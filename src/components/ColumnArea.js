import { React } from "react";
import "./ColumnArea.css";

export default function ColumnArea({
  columnList,
  setDisplayDroppedColumn,
  dictList,
}) {
  const displayColumnName =
    columnList &&
    columnList.map((itm, index) => (
      <button
        type="button"
        key={index}
        className="columnButton"
        onDragEnd={(e) => drop(e, index)}
        draggable
      >
        {itm}
      </button>
    ));

  const drop = (e, index) => {
    let tmp = (
      <div key={index} style={{ margin: "10px" }}>
        <h6 className="columnHeading">{columnList[index]}</h6>
        {dictList[columnList[index]].map((itm, i) => (
          <div key={i} className="columnData">
            {itm}
          </div>
        ))}
      </div>
    );
    setDisplayDroppedColumn((previous) => [...previous, tmp]);
  };

  return <div>{displayColumnName}</div>;
}
