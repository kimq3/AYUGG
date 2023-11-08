import { apiKey, nicknameUrl, idUrl, matchesUrl, matchDataUrl } from "model/constantly/apiConstants";

export default async function GetMultiData(nickname) {
    let userUrl = nicknameUrl + nickname + "?api_key=" + apiKey;
    let data = {};

    await fetch(userUrl)
    .then(response => response.json())
    .then(async(rawData) => {
        let uidUrl = idUrl + rawData.id + "?api_key=" + apiKey;
        let matchUrl = matchesUrl + rawData.puuid + "/ids?count=5&api_key=" + apiKey;
        
        data.nickname = rawData.name;

        await fetch(uidUrl)
        .then(response => response.json())
        .then((rawData) => {
            data.tier = rawData.tier;
            data.tierString = `${rawData.tier} ${rawData.rank} (${rawData.leaguePoints})`;
            data.wins = rawData.wins;
            data.losses = rawData.losses;

        });

        await fetch(matchUrl)
        .then(response => response.json())
        .then(async(rawData) => {
            for(let i =0; i < 5; i++){
                let matchDataUrl1 = matchDataUrl + rawData[i] + "?api_key=" + apiKey;
                await fetch(matchDataUrl1)
                .then(response => response.json())
                .then((rawData) => {
                    console.log(rawData);
                    
                })
            }
        });
        console.log(data);
        
        return data;
    });    
}