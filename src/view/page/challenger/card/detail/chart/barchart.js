import { ResponsiveContainer, BarChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Rectangle } from "recharts";

const data = [
    { name: 'Afasdf', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    { name: 'C', value: 15 },
    { name: 'C', value: 15 },
  ];

function Barchart(props){
    return(
        <BarChart width={350} height={240} data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Bar dataKey="value" fill={props.color} background={{ fill: '#eee' }} />       
        </BarChart>
    );
}

export default Barchart;