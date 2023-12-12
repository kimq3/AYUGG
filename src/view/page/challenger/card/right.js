import { useContext } from "react";
import * as styled from "view/page/challenger/style/rightStyle";
import { ChallengerContext } from "./totalFrame";

function RightScreen(){

    const data = useContext(ChallengerContext);

    return (
        <styled.Maindiv>
            <styled.UL>
            {[5,6,7,8,9].map((i)=>{
                return (
                    <styled.LI>
                        <styled.Img src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${data.participants[i].championName}.png`}></styled.Img>
                        <styled.Nickspan>{data.participants[i].riotIdGameName}</styled.Nickspan>                
                        <styled.ItemMain>
                            {data.participants[i].item0===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item0}.png`}></styled.Itemimg>}
                            {data.participants[i].item1===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item1}.png`}></styled.Itemimg>}
                            {data.participants[i].item2===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item2}.png`}></styled.Itemimg>}
                            {data.participants[i].item3===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item3}.png`}></styled.Itemimg>}
                            {data.participants[i].item4===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item4}.png`}></styled.Itemimg>}
                            {data.participants[i].item5===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item5}.png`}></styled.Itemimg>}
                            {data.participants[i].item6===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item6}.png`}></styled.Itemimg>}
                        </styled.ItemMain>
                    </styled.LI>
                );
            })}
                   
            </styled.UL>
        </styled.Maindiv>    
    );
}

export default RightScreen;