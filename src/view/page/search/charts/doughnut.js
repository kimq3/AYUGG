import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'wins', value: 10 },
  { name: 'losses', value: 10 },
];
const COLORS = ["#0000ff", "#626367"];

class DoughnutChart extends PureComponent {
  render() {
    return (
      <PieChart width={160} height={160} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          stroke="none"
          startAngle={90}
          endAngle={-270}
          innerRadius={40}
          outerRadius={70}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
};

export default DoughnutChart;