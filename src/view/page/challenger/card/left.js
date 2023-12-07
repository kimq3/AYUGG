import { useContext } from "react";
import * as style from "view/page/challenger/style/leftStyle";
import { ChallengerContext } from "./totalFrame";
import { GetChampImg } from "view/page/search/dataHandling/filterData";


function LeftScreen(){

    const data = useContext(ChallengerContext);

    return (
        
        <style.Maindiv>
            <style.UL>
                {[0,1,2,3,4].map((i)=>{
                    return(
                        <style.LI>
                            <style.ItemMain>
                               {data.participants[i].item6===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item6}.png`}></style.Itemimg>}
                               {data.participants[i].item5===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item5}.png`}></style.Itemimg>}
                               {data.participants[i].item4===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item4}.png`}></style.Itemimg>}
                               {data.participants[i].item3===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item3}.png`}></style.Itemimg>}
                               {data.participants[i].item2===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item2}.png`}></style.Itemimg>}
                               {data.participants[i].item1===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item1}.png`}></style.Itemimg>}
                               {data.participants[i].item0===0 ? <style.Itemimg></style.Itemimg> : <style.Itemimg src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${data.participants[i].item0}.png`}></style.Itemimg>}
                            </style.ItemMain>
                            <style.Nickspan>{data.participants[i].riotIdGameName}</style.Nickspan>
                            <style.Img src={GetChampImg(data.participants[i].championName)}></style.Img>
                        </style.LI>
                    );
                    
                })}  
            </style.UL>
        </style.Maindiv>    
    );
}

export default LeftScreen;