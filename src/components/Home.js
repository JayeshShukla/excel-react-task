import { useState } from "react";
import Navbar from "./Navbar";
import Excel from "./Excel";
import PieChart from "./PieChart";

const Home = () => {
  const [isExcel, setIsExcel] = useState(true);
  const [columnList, setColumnList] = useState([]);
  const [dictList, setDictList] = useState({});

  return (
    <div className="mainBody">
      <Navbar
        isExcel={isExcel}
        setIsExcel={setIsExcel}
        setColumnList={setColumnList}
        setDictList={setDictList}
      />

      {isExcel ? (
        <Excel columnList={columnList} dictList={dictList} />
      ) : (
        <PieChart dictList={dictList} />
      )}
    </div>
  );
};

export default Home;
