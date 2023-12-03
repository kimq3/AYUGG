import * as style from "view/page/challenger/style/totalFameStyle";
import MiddleScreen from "./middle";
import LeftScreen from "./left";
import RightScreen from "./right";
import DetailScreen from "./detail";
import { useState } from "react";

function TotalFrame(){

    const [show, setShow] = useState(false);

    return (
        <div>
            <style.Maindiv>
                <LeftScreen></LeftScreen>              
                <MiddleScreen isShow={show} setShow={setShow}></MiddleScreen>    
                <RightScreen></RightScreen>
            </style.Maindiv>
            {show === true ? <DetailScreen></DetailScreen> : null}
        </div>
        
    );
}

export default TotalFrame;