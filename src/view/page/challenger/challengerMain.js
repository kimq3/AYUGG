import { getMatch } from "model/api/challengerMatch";
import { useEffect, useState } from "react";
import Nav from "view/nav";

function ChallengerMain(){

    const [result, setResult]=useState([]);

    useEffect(()=>{
        getMatch()
        .then((data)=>{
            setResult(data);
            console.log('매치결과',data);
        });
    },[]);
    
    return (
        <div>
            <Nav></Nav>
            <div>챌린저 매치 페이지입니다.</div>
        </div>
    );
}

export default ChallengerMain;