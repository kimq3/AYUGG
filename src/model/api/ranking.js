import { api_key, solo_rank_url, summoner_url } from "model/constantly/apiConstants";

export async function getRanker(){
    const response = await fetch(solo_rank_url+"?api_key="+api_key);
    const data1 = await response.json();
    const data2 = await data1.slice(0,20); //건당 205명의 유저가 나오기에 20명으로 추출

    for(let i=0; i<data2.length; i++){
        const response2 = await fetch(summoner_url+data2[i].summonerName+"?api_key="+api_key); //유저 레벨 추출을 위한 api 호출
        const data3 = await response2.json();

        data2[i]['level'] = await data3.summonerLevel; //랭커 유저 레벨 추출

        let avg;
        avg = Math.ceil((data2[i].wins/(data2[i].wins+data2[i].losses))*100);  //승률 제조
        data2[i]['percent'] = avg;
    }

    return await data2;
}