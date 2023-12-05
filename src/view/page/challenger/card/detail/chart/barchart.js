import { BarChart, XAxis, YAxis, Bar } from "recharts";



function Barchart(props){
    return(
        <BarChart width={250} height={240} data={props.data} layout="vertical">
            <XAxis type="number"/>
            <YAxis type="category" width={0} height={5}></YAxis>
            <Bar dataKey="value" fill={props.color} background={{ fill: '#eee' }} />       
        </BarChart>
    );
}

export default Barchart;