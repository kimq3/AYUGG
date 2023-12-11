import * as styled from "view/page/challenger/style/totalFameStyle";
import MiddleScreen from "./middle";
import LeftScreen from "./left";
import RightScreen from "./right";
import DetailScreen from "./detail";
import { useState, createContext } from "react";

export const ChallengerContext = createContext();

function TotalFrame(props){

    const [show, setShow] = useState(false);

    return (
        <div>
            <ChallengerContext.Provider value={props.data.info}>
                <styled.Maindiv>
                    <LeftScreen></LeftScreen>              
                    <MiddleScreen isShow={show} setShow={setShow}></MiddleScreen>    
                    <RightScreen></RightScreen>
                </styled.Maindiv>
                {show === true ? <DetailScreen></DetailScreen> : null}
            </ChallengerContext.Provider>  
        </div>
        
    );
}

export default TotalFrame;