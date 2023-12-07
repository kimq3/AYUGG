import * as style from "view/page/challenger/style/detailStyle";
import ChartMain from "./chart/chartMain";
import { useContext } from "react";
import { ChallengerContext } from "../totalFrame";
import { changeLeftChartData, changeRightChartData } from "./changeChartData";

function Kill(){

    const data = useContext(ChallengerContext);

    const leftchartData=changeLeftChartData(data, 'kills');
    const rightchartData=changeRightChartData(data, 'kills');


    return (
        <div>
            <style.Titlediv>킬</style.Titlediv>
            <ChartMain dataLeft={leftchartData} dataRight={rightchartData}></ChartMain>   
        </div>
        
    );
}

export default Kill;