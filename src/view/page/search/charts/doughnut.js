import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

class DoughnutChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  componentDidUpdate(prevProps) {
    setTimeout(() => {
      if (prevProps.data !== this.props.data) {
        this.setState({ data: this.props.data });
      }
    }, 1000);

  }

  render() {
    const { data } = this.state;
    const COLORS = ["#0000ff", "#626367"];
    return (
      <PieChart width={160} height={160}>
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