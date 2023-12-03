import { Maindiv } from "../style/totalFameStyle";
import * as style from "view/page/challenger/style/totalFameStyle";
import MiddleScreen from "./middle";

function TotalFrame(){
    return (
        <div>
            <style.Maindiv>
                <style.Leftdiv></style.Leftdiv>               
                <MiddleScreen></MiddleScreen>    
                <style.Rightdiv></style.Rightdiv>
            </style.Maindiv>
        </div>
        
    );
}

export default TotalFrame;