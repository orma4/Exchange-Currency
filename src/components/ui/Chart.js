import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "../styles/Chart.css";

const Chart = ({ data }) => {
  return (
    <div class="chart-root" style={{ width: "70%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="date" scale="band" />
          <YAxis
            type="number"
            orientation="left"
            domain={["dataMin", "dataMax"]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
