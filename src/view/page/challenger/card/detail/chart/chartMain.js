import * as styled from "view/page/challenger/style/detailStyle";
import Barchart from "./barchart";
import LogList from "./logList";
import ImgList from "./imgList";

function ChartMain(props){

    
    return(
        <styled.MainGraph>
        <styled.Number>
            <ImgList data={props.dataLeft}></ImgList>
        </styled.Number>
        <styled.LeftGraph>
            <Barchart color="#3490E5" data={props.dataLeft}></Barchart>
        </styled.LeftGraph>

        <styled.Number>
            <LogList data={props.dataLeft}></LogList>
        </styled.Number>

        <styled.Number>
            <ImgList data={props.dataRight}></ImgList>
        </styled.Number>

        <styled.RightGraph>
            <Barchart color="#E64638" data={props.dataRight}></Barchart>
        </styled.RightGraph>

        <styled.Number>
            <LogList data={props.dataRight}></LogList>
        </styled.Number>
    </styled.MainGraph>
    );
}

export default ChartMain;