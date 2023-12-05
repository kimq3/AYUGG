import { getMatch } from "model/api/challengerMatch";
import { useEffect, useState} from "react";
import Nav from "view/nav";
import TotalFrame from "./card/totalFrame";



function ChallengerMain(){

    const [result, setResult]=useState([]);

    useEffect(()=>{
        getMatch()
        .then((data)=>{
            setResult(data);
            
        });
    },[]);

    
    return (
        <div>
            <Nav></Nav>
            {result.map((data)=>{
                return <TotalFrame data={data}></TotalFrame>
            })}
                        
        </div>
    );
}

export default ChallengerMain;