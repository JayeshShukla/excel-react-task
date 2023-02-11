import React from "react";
import { getDictList, getColumnList } from "../utils/index";
import * as XLSX from "xlsx";
import "./Navbar.css";

export default function Navbar({
  isExcel,
  setIsExcel,
  setColumnList,
  setDictList,
}) {
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
    <div className="container-fluid">
      <div className="navBar">
        <div className="row">
          <div className="col-sm-6">
            <div className="nabBarTitle" onClick={() => setIsExcel(!isExcel)}>
              View {isExcel ? "Chart" : "Excel"}
            </div>
          </div>
          <div className="col-sm-6">
            <input
              type="file"
              name="upload"
              id="upload"
              className="navbarInput"
              onChange={(e) => readUploadFile(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
