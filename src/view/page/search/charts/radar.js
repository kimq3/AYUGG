import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150
  }
];

export default class RadarCharactChart extends PureComponent {
  render() {
    return (
      <RadarChart
        width={250}
        height={200}
        outerRadius="90%"
        data={data}
      >
        <PolarGrid stroke="#626367"/>
        <PolarAngleAxis fontSize={10} dataKey="subject" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="orange"
          fill="#ffa500"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}
