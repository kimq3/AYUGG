import { apiKey1, idUrl } from "model/constantly/apiConstants";

// input: data  output: tierList
// api를 통해 데이터를 가져온다
export default async function GetTierList(data, matchesIndex) {
  try {
    const res = [];
    for (let partinum = 0; partinum < 10; partinum++) {
      const uidUrl = idUrl + data.matches[matchesIndex].participants[partinum].summonerId + "?api_key=" + apiKey1;
      await fetch(uidUrl)
        .then(response => response.json())
        .then((rawData) => {
          res.push(rawData[0].tier+ " " + rawData[0].rank);
        });
    }
    return res;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
}