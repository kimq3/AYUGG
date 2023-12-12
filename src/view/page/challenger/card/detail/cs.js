import * as styled from "view/page/challenger/style/detailStyle";
import ChartMain from "./chart/chartMain";
import { useContext } from "react";
import { ChallengerContext } from "../totalFrame";
import { changeLeftChartData, changeRightChartData } from "./changeChartData";

function Cs(){

    const data = useContext(ChallengerContext);

    const leftchartData=changeLeftChartData(data, 'cs');
    const rightchartData=changeRightChartData(data, 'cs');

    return (
        <div>
            <styled.Titlediv>CS</styled.Titlediv>
            <ChartMain dataLeft={leftchartData} dataRight={rightchartData}></ChartMain>
        </div>
        
    );
}

export default Cs;