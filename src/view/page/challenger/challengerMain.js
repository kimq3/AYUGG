import { getMatch } from "model/api/challengerMatch";
import { useEffect, useState } from "react";
import Nav from "view/nav";
import TotalFrame from "./card/totalFrame";


function ChallengerMain(){

    //const [result, setResult]=useState([]);
/*
    useEffect(()=>{
        getMatch()
        .then((data)=>{
            setResult(data);
            console.log('매치결과',data);
        });
    },[]);
*/
    
    return (
        <div>
            <Nav></Nav>
            <TotalFrame></TotalFrame>
        </div>
    );
}

export default ChallengerMain;