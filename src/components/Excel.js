import "./Excel.css";
import { useState } from "react";
import ColumnArea from "./ColumnArea";
import TabularArea from "./TabularArea";

const Excel = ({ columnList, dictList }) => {
  const [displayDroppedColumn, setDisplayDroppedColumn] = useState([]);

  return (
    <div className="container-fluid ">
      <div className="platformDiv">
        <div className="row">
          <div className="col-sm-2 columnPlatform">
            <ColumnArea
              columnList={columnList}
              setDisplayDroppedColumn={setDisplayDroppedColumn}
              dictList={dictList}
            />
          </div>
          <div className="col-sm tabularPlatform">
            <TabularArea displayDroppedColumn={displayDroppedColumn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excel;
