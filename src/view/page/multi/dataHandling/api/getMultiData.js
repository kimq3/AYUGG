import { apiKey, nicknameUrl, idUrl, matchesUrl, matchDataUrl } from "model/constantly/apiConstants";

// input: nickname 1개 output: 그 사람의 multisearch에 필요한 데이터
// api를 통해 데이터를 가져온다
export default async function GetMultiData(nickname) {
  let userUrl = nicknameUrl + nickname + "?api_key=" + apiKey;
  let data = {};
  data.matches = [];

  await fetch(userUrl)
    .then(response => response.json())
    .then(async (rawData) => {
      let uidUrl = idUrl + rawData.id + "?api_key=" + apiKey;
      let matchUrl = matchesUrl + rawData.puuid + "/ids?count=5&api_key=" + apiKey;

      data.nickname = rawData.name;

      await fetch(uidUrl)
        .then(response => response.json())
        .then((rawData) => {
          if (rawData.length === 0) {
            data.tier = 'NONE';
            data.tierString = 'UNRANK';
            data.wins = 0;
            data.losses = 0;
          } else {
            data.tier = rawData[0].tier;
            data.tierString = `${rawData[0].tier} ${rawData[0].rank} (${rawData[0].leaguePoints}LP)`;
            data.wins = rawData[0].wins;
            data.losses = rawData[0].losses;
          }
        });

      await fetch(matchUrl)
        .then(response => response.json())
        .then(async (rawData) => {
          for (let i = 0; i < 5; i++) {
            let matchDataUrl1 = matchDataUrl + rawData[i] + "?api_key=" + apiKey;
            await fetch(matchDataUrl1)
              .then(response => response.json())
              .then((rawData) => {
                for (let j = 0; j < 10; j++) {
                  if (data.nickname === rawData.info.participants[j].summonerName) {
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
    })
  return data;
}