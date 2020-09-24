/*global window:false*/
/*eslint-disable no-magic-numbers,react/no-multi-comp */
import React from "react";
import { VictoryChart } from "Packages/victory-chart/src/index";
import { VictoryBar } from "Packages/victory-bar/src/index";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "40%",
      margin: "3%"
    };

    const chartContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%"
    };

    return (
      <div className="demo" style={containerStyle}>
        <div style={chartContainerStyle}>
          <h3>Tabbable with aria-labels bar chart</h3>
          <VictoryChart domainPadding={{ x: 40, y: 40 }}>
            <VictoryBar
              data={[
                { x: "Small", y: 1 },
                { x: "Medium", y: 3 },
                { x: "Large", y: 5 },
                { x: "Larger", y: 7 }
              ]}
              ariaLabel={({ datum }) => `bar-value-${datum.x}`}
              tabIndex={({ index }) => index + 1}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}
