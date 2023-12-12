import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const tierStringMapping = new Map([
  [0, "Iron"],
  [1, "Bronze"],
  [2, "Silver"],
  [3, "Gold"],
  [4, "Platinum"],
  [5, "Emerald"],
  [6, "Diamond"],
  [7, "Master"],
  [8, "Grandmaster"],
  [9, "Challenger"],
]);

const CustomTooltip = ({ label, active, payload }) => {
  if (active && payload && payload.length) {
    const tooltipStyle = {
      color: '#ffa500',
      fontSize: '8px',
      padding: '2px',
      background: 'rgb(47,47,47)',
      WebkitBorderRadius: '4px',
      padding: '4px 8px 0 8px',
      border: '1px solid white',
    };

    return (
      <div style={tooltipStyle}>
        <b>{`${label}`}</b>
        <p>{`${tierStringMapping.get(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
};

export default class LineTierChart extends PureComponent {
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
    return (
      <LineChart
        width={160}
        height={80}
        data={data}
      >
        <XAxis fontSize={10} dataKey="name" angle={7} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={false}
          contentStyle={{ color: 'white', fontSize: '8px', padding: '2px', background: 'black', WebkitBorderRadius: '4px' }}
        />
        <Line
          dataKey="tierNum"
          stroke="#ffa500"
          activeDot={{ r: 4 }}
          dot={{ r: 2 }}
        />
      </LineChart>
    );
  }
}