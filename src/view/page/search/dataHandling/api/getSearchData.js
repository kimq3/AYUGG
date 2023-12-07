import { apiKey, nicknameUrl, idUrl, matchesUrl, matchDataUrl } from "model/constantly/apiConstants";

// input: nickname 1개 output: 그 사람의 search에 필요한 데이터
// api를 통해 데이터를 가져온다
export default async function GetSearchData(nickname) {
  try {
    let userUrl = nicknameUrl + nickname + "?api_key=" + apiKey;
    let data = {};
    data.matchList = [];
    data.matches = [];
    data.partinum = [];
    const matchNum = 2; // 매치갯수

    await fetch(userUrl)
      .then(response => response.json())
      .then(async (rawData) => {
        let uidUrl = idUrl + rawData.id + "?api_key=" + apiKey;
        let matchUrl = matchesUrl + rawData.puuid + "/ids?count=20&api_key=" + apiKey;

        data.nickname = rawData.name;
        data.profileIconId = rawData.profileIconId;
        data.puuid = rawData.puuid;

        await fetch(uidUrl)
          .then(response => response.json())
          .then((rawData) => {
            if (rawData.length === 0) {
              data.tier = 'NONE';
              data.rank = '';
              data.leaguePoints = 0;
              data.wins = 0;
              data.losses = 0;
            } else {
              data.tier = rawData[0].tier;
              data.rank = rawData[0].rank;
              data.leaguePoints = rawData[0].leaguePoints;
              data.wins = rawData[0].wins;
              data.losses = rawData[0].losses;
            }
          });

        await fetch(matchUrl)
          .then(response => response.json())
          .then(async (rawData) => {
            data.matchList = rawData;
            for (let i = 0; i < matchNum; i++) {
              let matchDataUrl1 = matchDataUrl + rawData[i] + "?api_key=" + apiKey;
              await fetch(matchDataUrl1)
                .then(response => response.json())
                .then((rawData) => {
                  data.matches[i] = rawData.info;
                  for (let j = 0; j < 10; j++) {
                    if (data.nickname === rawData.info.participants[j].summonerName) {
                      data.partinum[i] = j;
                    }
                  }
                });
            }
          });
      })
    return data;
  } catch (error) {
    throw new Error(error);
  }
}