import { apiKey, matchesUrl, matchDataUrl } from "model/constantly/apiConstants";

// input: nickname 1개 output: 그 사람의 search에 필요한 데이터
// api를 통해 데이터를 가져온다
export default async function GetQueueData(nickname, puuid, queue) {
  try {
    let data = {};
    data.matchList = [];
    data.matches = [];
    data.partinum = [];
    const matchNum = 2; // 매치갯수
    let matchUrl = "";
    if (queue === 10000) {
      matchUrl = matchesUrl + puuid + "/ids?count=20&api_key=" + apiKey;
    } else {
      matchUrl = matchesUrl + puuid + "/ids?queue=" + queue + "&count=20&api_key=" + apiKey;
    }

    await fetch(matchUrl)
      .then(response => response.json())
      .then(async (rawData) => {
        if (queue === 490) {
          await fetch(matchesUrl + puuid + "/ids?queue=430&count=20&api_key=" + apiKey)
            .then(response => response.json())
            .then(async (_data) => {
              const concatData = rawData.concat(_data);
              data.matchList = concatData;
            })
        } else {
          data.matchList = rawData;
        }
        for (let i = 0; i < matchNum; i++) {
          let matchDataUrl1 = matchDataUrl + rawData[i] + "?api_key=" + apiKey;
          await fetch(matchDataUrl1)
            .then(response => response.json())
            .then((rawData) => {
              data.matches[i] = rawData.info;
              for (let j = 0; j < 10; j++) {
                if (nickname === rawData.info.participants[j].summonerName) {
                  data.partinum[i] = j;
                }
              }
            });
        }
      });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}