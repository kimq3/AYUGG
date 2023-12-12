import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export default class RadarCharactChart extends PureComponent {
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
      <RadarChart
        width={250}
        height={200}
        outerRadius="90%"
        data={data}
      >
        <PolarGrid stroke="#626367" />
        <PolarAngleAxis fontSize={6} dataKey="name" />
        <Radar
          dataKey="value"
          stroke="orange"
          fill="#ffa500"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
