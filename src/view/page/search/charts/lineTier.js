import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Page B",
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    pv: 4300,
    amt: 2100
  }
];

export default class LineTierChart extends PureComponent {
  render() {
    return (
      <LineChart
        width={160}
        height={80}
        data={data}

      >
        <XAxis fontSize={10} dataKey="name" angle={7} />
        <Tooltip
          cursor={false}
          contentStyle={{ color: 'white', fontSize: '8px', padding: '2px', background: 'black', WebkitBorderRadius: '4px' }} />
        <Line
          dataKey="pv"
          stroke="#ffa500"
          activeDot={{ r: 4 }}
          dot={{ r: 2 }}
        />
      </LineChart>
    );
  }
}