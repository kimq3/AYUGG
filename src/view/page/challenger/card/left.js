import { useContext } from "react";
import * as styled from "view/page/challenger/style/leftStyle";
import { ChallengerContext } from "./totalFrame";
import { GetChampImg } from "view/page/search/dataHandling/filterData";


function LeftScreen(){

    const data = useContext(ChallengerContext);

    return (
        
        <styled.Maindiv>
            <styled.UL>
                {[0,1,2,3,4].map((i)=>{
                    return(
                        <styled.LI>
                            <styled.ItemMain>
                               {data.participants[i].item6===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item6}.png`}></styled.Itemimg>}
                               {data.participants[i].item5===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item5}.png`}></styled.Itemimg>}
                               {data.participants[i].item4===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item4}.png`}></styled.Itemimg>}
                               {data.participants[i].item3===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item3}.png`}></styled.Itemimg>}
                               {data.participants[i].item2===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item2}.png`}></styled.Itemimg>}
                               {data.participants[i].item1===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item1}.png`}></styled.Itemimg>}
                               {data.participants[i].item0===0 ? <styled.Itemimg></styled.Itemimg> : <styled.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item0}.png`}></styled.Itemimg>}
                            </styled.ItemMain>
                            <styled.Nickspan>{data.participants[i].riotIdGameName}</styled.Nickspan>
                            <styled.Img src={GetChampImg(data.participants[i].championName)}></styled.Img>
                        </styled.LI>
                    );
                    
                })}  
            </styled.UL>
        </styled.Maindiv>    
    );
}

export default LeftScreen;