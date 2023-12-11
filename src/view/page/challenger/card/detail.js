import * as styled from "view/page/challenger/style/detailStyle";
import { buttonData, selectComponent } from "./detail/detaildata";
import { useState } from "react";

function DetailScreen(){

    const [compo , setCompo] = useState('kill');

    function buttonClick(e) {
        const {value}= e.target;
        setCompo(value);
    }

    return (
        <styled.Maindiv>
            <styled.FilDiv>
                {buttonData.map((data)=>{
                    return(
                        <styled.Button onClick={buttonClick} value={data.value} key={data.id}>{data.name}</styled.Button>
                    );
                })
                }
            </styled.FilDiv>
            {compo && <div>{selectComponent[compo]}</div>}
        </styled.Maindiv>
        
    );
}

export default DetailScreen;