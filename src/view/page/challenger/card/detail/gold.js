import * as style from "view/page/challenger/style/detailStyle";
import ChartMain from "./chart/chartMain";
import { useContext } from "react";
import { ChallengerContext } from "../totalFrame";
import { changeLeftChartData, changeRightChartData} from "./changeChartData";

function Gold(){
    const data = useContext(ChallengerContext);

    const leftchartData=changeLeftChartData(data, 'gold');
    const rightchartData=changeRightChartData(data, 'gold');

    return (
        <div>
            <style.Titlediv>골드</style.Titlediv>
            <ChartMain dataLeft={leftchartData} dataRight={rightchartData}></ChartMain>
        </div>
        
    );
}

export default Gold;