import { apiKey, nicknameUrl, idUrl, matchesUrl, matchDataUrl } from "model/constantly/apiConstants";
import { useState } from 'react';

export default async function GetMultiData(nickname) {
    let userUrl = nicknameUrl + nickname + "?api_key=" + apiKey;
    let data = {};
    data.matches = [];

    await fetch(userUrl)
    .then(response => response.json())
    .then(async(rawData) => {
        let uidUrl = idUrl + rawData.id + "?api_key=" + apiKey;
        let matchUrl = matchesUrl + rawData.puuid + "/ids?count=5&api_key=" + apiKey;
        
        data.nickname = rawData.name;

        await fetch(uidUrl)
        .then(response => response.json())
        .then((rawData) => {
            data.tier = rawData[0].tier;
            data.tierString = `${rawData[0].tier} ${rawData[0].rank} (${rawData[0].leaguePoints})`;
            data.wins = rawData[0].wins;
            data.losses = rawData[0].losses;

        });

        await fetch(matchUrl)
        .then(response => response.json())
        .then(async(rawData) => {
            for(let i = 0; i < 5; i++){
                let matchDataUrl1 = matchDataUrl + rawData[i] + "?api_key=" + apiKey;
                await fetch(matchDataUrl1)  
                .then(response => response.json())
                .then((rawData) => {
                    for(let j = 0; j < 10; j++){
                        if(data.nickname === rawData.info.participants[j].summonerName){
                            data.matches[i] = {
                                championName: rawData.info.participants[j].championName,
                                kda: `${rawData.info.participants[j].kills}/${rawData.info.participants[j].deaths}/${rawData.info.participants[j].assists}`,
                                win: rawData.info.participants[j].win,
                                startTime: rawData.info.gameStartTimestamp
                            }
                        }
                    }
                });
            }
        });
        console.log(data);
        return data;
    });    
}