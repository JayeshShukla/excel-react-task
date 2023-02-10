import { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { getDictList, getColumnList } from "../utils/index";

const ExcelDragAndDrop = () => {
  const [columnList, setColumnList] = useState([]);
  const [dictList, setDictList] = useState({});
  const dragItem = useRef();

  const dragStart = (e, position) => {
    console.log(e);
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const displayColumnName =
    columnList &&
    columnList.map((itm, index) => (
      <button
        type="button"
        key={index}
        className="btn btn-info"
        onDragStart={(e) => dragStart(e, index)}
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
        <div className="row" style={{ height: "100vh", background: "#8262a8" }}>
          <div
            className="col-sm-2"
            style={{
              background: "#20262E",
              borderRadius: "10px",
              margin: "10px",
              width: "100%",
              height: "100%",
              overflowY: "scroll",
              scrollbarColor: "rebeccapurple green",
              scrollbarWidth: "thin",
            }}
          >
            {displayColumnName}
          </div>
          <div
            className="col-sm"
            style={{
              background: "#473C33",
              borderRadius: "10px",
              margin: "10px",
              marginLeft: "5px",
            }}
          >
            <input
              type="file"
              name="upload"
              id="upload"
              style={{ color: "yellow", marginTop: "20px" }}
              onChange={(e) => readUploadFile(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcelDragAndDrop;
