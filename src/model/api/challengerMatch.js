import { apiKey, matchDataUrl, matchIdUrl2, soloRankUrl, nicknameUrl, matchesUrl } from "model/constantly/apiConstants";

export async function getMatch(){
    const randomNumber = Math.floor(Math.random()*20);

    const response = await fetch(soloRankUrl+"?api_key="+apiKey); //챌린저 유저 목록 request
    const userlist = await response.json();
    const user = await userlist[randomNumber].summonerName;  //랜덤 유저 선정

    const response2 = await fetch(nicknameUrl+user+"?api_key="+apiKey); //랜덤 유저의 puuid 추출을 위한 호출
    const userInfo = await response2.json();
    const userPuuid = await userInfo.puuid;

    const response3 = await fetch(matchesUrl+userPuuid+matchIdUrl2+"&api_key="+apiKey); //유저의 경기 10개 추출
    const matchList = await response3.json();

    var matchResultList=[];

    for(let i=0; i<matchList.length; i++){  //경기 10개의 결과를 response 
        const response4 = await fetch(matchDataUrl+matchList[i]+"?api_key="+apiKey);
        const matchResult= await response4.json();
        matchResultList.push(matchResult);
    }
    
    

    return matchResultList;

}