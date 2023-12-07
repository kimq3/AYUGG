import { useContext } from "react";
import * as style from "view/page/challenger/style/rightStyle";
import { ChallengerContext } from "./totalFrame";

function RightScreen(){

    const data = useContext(ChallengerContext);

    return (
        <style.Maindiv>
            <style.UL>
            {[5,6,7,8,9].map((i)=>{
                return (
                    <style.LI>
                        <style.Img src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${data.participants[i].championName}.png`}></style.Img>
                        <style.Nickspan>{data.participants[i].riotIdGameName}</style.Nickspan>                
                        <style.ItemMain>
                            {data.participants[i].item0===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item0}.png`}></style.Itemimg>}
                            {data.participants[i].item1===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item1}.png`}></style.Itemimg>}
                            {data.participants[i].item2===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item2}.png`}></style.Itemimg>}
                            {data.participants[i].item3===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item3}.png`}></style.Itemimg>}
                            {data.participants[i].item4===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item4}.png`}></style.Itemimg>}
                            {data.participants[i].item5===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item5}.png`}></style.Itemimg>}
                            {data.participants[i].item6===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item6}.png`}></style.Itemimg>}
                        </style.ItemMain>
                    </style.LI>
                );
            })}
                   
            </style.UL>
        </style.Maindiv>    
    );
}

export default RightScreen;