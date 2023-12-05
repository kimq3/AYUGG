import * as style from "view/page/challenger/style/detailStyle";
import Barchart from "./barchart";
import LogList from "./logList";
import ImgList from "./imgList";

function ChartMain(props){

    
    return(
        <style.MainGraph>
        <style.Number>
            <ImgList data={props.dataLeft}></ImgList>
        </style.Number>
        <style.LeftGraph>
            <Barchart color="#3490E5" data={props.dataLeft}></Barchart>
        </style.LeftGraph>

        <style.Number>
            <LogList data={props.dataLeft}></LogList>
        </style.Number>

        <style.Number>
            <ImgList data={props.dataRight}></ImgList>
        </style.Number>

        <style.RightGraph>
            <Barchart color="#E64638" data={props.dataRight}></Barchart>
        </style.RightGraph>

        <style.Number>
            <LogList data={props.dataRight}></LogList>
        </style.Number>
    </style.MainGraph>
    );
}

export default ChartMain;