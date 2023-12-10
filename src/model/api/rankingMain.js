import { apiKey, soloRankUrl, nicknameUrl, flexRankUrl } from "model/constantly/apiConstants";

export async function getRankingMain(mode){
    let response;

    if(mode==='solo'){
        response = await fetch(soloRankUrl+"?api_key="+apiKey);
    }
    else if(mode==='flex'){
        response = await fetch(flexRankUrl+"?api_key="+apiKey);
    }

    const data1 = await response.json();
    const data2 = await data1.slice(0,20);
    
    return await data2;
}