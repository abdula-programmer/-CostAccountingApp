import React from "react";
import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = ({dataSets}) => {

  const dataSetsValue = dataSets.map(dataSet => dataSet.value)
  const maxMonthCost = Math.max(...dataSetsValue)

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
