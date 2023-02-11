import { useState } from "react";
import * as XLSX from "xlsx";
import { getDictList, getColumnList } from "../utils/index";

const ExcelDragAndDrop = () => {
  const [columnList, setColumnList] = useState([]);
  const [dictList, setDictList] = useState({});
  const [displayDroppedColumn, setDisplayDroppedColumn] = useState([]);

  const drop = (e, index) => {
    let tmp = (
      <div key={index} style={{ margin: "10px" }}>
        <h6
          style={{
            color: "yellow",
            background: "black",
            padding: "10px",
            borderRadius: "20px",
            display: "inline-block",
          }}
        >
          {columnList[index]}
        </h6>
        {dictList[columnList[index]].map((itm, i) => (
          <div
            key={i}
            style={{
              background: "black",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "5px",
              whiteSpace: "nowrap",
            }}
          >
            {itm}
          </div>
        ))}
      </div>
    );
    setDisplayDroppedColumn((previous) => [...previous, tmp]);
  };

  const displayColumnName =
    columnList &&
    columnList.map((itm, index) => (
      <button
        type="button"
        key={index}
        className="btn btn-info"
        onDragEnd={(e) => drop(e, index)}
        draggable
        style={{
          minWidth: "14vw",
          display: "block",
          marginTop: "20px",
          color: "black",
        }}
      >
        {itm}
      </button>
    ));

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setDictList(getDictList(json));
        setColumnList(getColumnList(json));
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div
          className="row"
          style={{ minHeight: "100vh", width: "100%", background: "#8262a8" }}
        >
          <div
            className="col-sm-2"
            style={{
              background: "#20262E",
              borderRadius: "10px",
              margin: "10px",
              minHeight: "100%",
              width: "100%",
              overflowY: "scroll",
              scrollbarColor: "rebeccapurple green",
              scrollbarWidth: "thin",
            }}
          >
            {displayColumnName}
            {displayColumnName}
            {displayColumnName}
          </div>
          <div
            className="col-sm"
            style={{
              background: "#473C33",
              borderRadius: "10px",
              margin: "10px",
              marginLeft: "5px",
              position: "relative",
              minHeight: "100%",
              maxHeight: "100%",
              overflowY: "scroll",
              scrollbarColor: "rebeccapurple green",
              scrollbarWidth: "thin",
            }}
          >
            <input
              type="file"
              name="upload"
              id="upload"
              style={{
                color: "yellow",
                marginTop: "20px",
                position: "fixed",
              }}
              onChange={(e) => readUploadFile(e)}
            />
            <div
              style={{
                marginTop: "20px",
                color: "white",
                display: "flex",
                whiteSpace: "nowrap",
              }}
            >
              {displayDroppedColumn}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcelDragAndDrop;
