import React from "react";
import { VictoryChart } from "@packages/victory-chart";
import { VictoryBar } from "@packages/victory-bar";

type BarData = {
  x: string | number;
  y: string | number;
}[][];

interface VictoryBarDemoState {
  barData: BarData;
  numericBarData: BarData;
}

export default class VictoryAccessibilityDemo extends React.Component<any, VictoryBarDemoState> {
  setStateInterval?: number = undefined;

  constructor(props: any) {
    super(props);
  }

  render() {
    const containerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start"
    };
    const chartContainerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
      height: "50%"
    };

    return (
      <div className="demo" style={containerStyle}>
        <div style={chartContainerStyle} data-testId="bar-accessibility-chart">
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
