import * as style from "view/page/challenger/style/detailStyle";
import Barchart from "./chart/barchart";
import LogList from "./chart/logList";

function Kill(){

    const data = [
        { name: 'Afasdf', value: 10 },
        { name: 'B', value: 20 },
        { name: 'C', value: 15 },
        { name: 'C', value: 15 },
        { name: 'C', value: 15 },
    ];

    return (
        <div>
            <style.Titlediv>킬페이지 입니다.</style.Titlediv>
            <style.MainGraph>
                <style.LeftGraph>
                    <Barchart color="skyblue"></Barchart>
                </style.LeftGraph>

                <style.Number>
                    <LogList data={data}></LogList>
                </style.Number>

                <style.RightGraph>
                    <Barchart color="red"></Barchart>
                </style.RightGraph>

                <style.Number>
                    <LogList data={data}></LogList>
                </style.Number>
            </style.MainGraph>
            
        </div>
        
    );
}

export default Kill;