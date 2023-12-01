import { apiKey, matchDataUrl } from "model/constantly/apiConstants";

// input: nickname 1개 output: 그 사람의 search에 필요한 데이터
// api를 통해 데이터를 가져온다
export default async function GetMatchData(matchId,nickname) {
  try {
    let data = {};
    let matchDataUrl1 = matchDataUrl + matchId + "?api_key=" + apiKey;

    await fetch(matchDataUrl1)
      .then(response => response.json())
      .then((rawData) => {
        data.match = rawData.info;
        for (let j = 0; j < 10; j++) {
          if (nickname === rawData.info.participants[j].summonerName) {
            data.partinum = j;
          }
        }
      });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}