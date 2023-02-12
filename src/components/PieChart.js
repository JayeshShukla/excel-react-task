import { Chart } from "react-google-charts";
import "./PieChart.css";

const PieChart = ({ dictList }) => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
    is3D: true,
  };

  return (
    <div className="container-fluid ">
      <div className="platformDiv">
        <div className="row">
          <div className="col-sm columnPlatform">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"80vh"}
              style={{ marginTop: "30px" }}
            />
          </div>
          <div className="col-sm tabularPlatform">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"80vh"}
              style={{ marginTop: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
// <div className="platformDiv">
// <Chart
//   chartType="BarChart"
//   data={[
//     ["Age", "Weight"],
//     [4, 5.5],
//     [8, 12],
//   ]}
//   width="100%"
//   height="400px"
//   legendToggle
// />

//   <Chart
//     chartType="ScatterChart"
//     data={[
//       ["Age", "Weight"],
//       [4, 5.5],
//       [8, 12],
//     ]}
//     width="100%"
//     height="400px"
//     legendToggle
//   />
// </div>
