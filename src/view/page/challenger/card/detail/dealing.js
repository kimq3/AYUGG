import * as styled from "view/page/challenger/style/detailStyle";
import ChartMain from "./chart/chartMain";
import { useContext } from "react";
import { ChallengerContext } from "../totalFrame";
import { changeLeftChartData, changeRightChartData } from "./changeChartData";

function Dealing(){

    const data = useContext(ChallengerContext);

    const leftchartData=changeLeftChartData(data, 'dealing');
    const rightchartData=changeRightChartData(data, 'dealing');

    return (
        <div>
            <styled.Titlediv>챔피언에게 가한 피해량</styled.Titlediv>
            <ChartMain dataLeft={leftchartData} dataRight={rightchartData}></ChartMain>
        </div>
        
    );
}

export default Dealing;