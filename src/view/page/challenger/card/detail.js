import * as style from "view/page/challenger/style/detailStyle";
import { buttonData, selectComponent } from "./detail/detaildata";
import { useState } from "react";

function DetailScreen(){

    const [compo , setCompo] = useState('kill');

    function buttonClick(e) {
        const {value}= e.target;
        setCompo(value);
    }

    return (
        <style.Maindiv>
            <style.FilDiv>
                {buttonData.map((data)=>{
                    return(
                        <style.Button onClick={buttonClick} value={data.value} key={data.id}>{data.name}</style.Button>
                    );
                })
                }
            </style.FilDiv>
            {compo && <div>{selectComponent[compo]}</div>}
        </style.Maindiv>
        
    );
}

export default DetailScreen;