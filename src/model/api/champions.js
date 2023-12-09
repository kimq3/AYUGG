export const VersionState = async () => {
    const versionApi = "https://ddragon.leagueoflegends.com/api/versions.json";
    
    const response = await fetch(versionApi);
    const resJson = await response.json();
    
    return resJson[0];
};

export async function ChampionApi() {
  const ver = await VersionState();
  const verUrl = "https://ddragon.leagueoflegends.com/cdn/" + ver;

  const championDataUrl = "https://ddragon.leagueoflegends.com/cdn/" + ver + "/data/ko_KR/champion.json";
  const response = await fetch(championDataUrl);
  const resJson = await response.json();

  let champDataList = Object.values(resJson.data);
  
  champDataList.sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
    return nameA.localeCompare(nameB);
  });

  let dataList = [];
  for(let i = 0; i < champDataList.length; i++) {
    let data = {
      "id": champDataList[i].id,
      "name": champDataList[i].name,
      "src": verUrl + "/img/champion/" + champDataList[i].image.full,
    }
    dataList.push(data);
  }

  return dataList;
}

export async function RuneApi() {
  const ver = await VersionState();

  const runeUrl = "https://ddragon.leagueoflegends.com/cdn/" + ver + "/data/ko_KR/runesReforged.json";
  const response = await fetch(runeUrl);
  const resJson = await response.json();

  return resJson;
}

export async function getRanking() {
  const dataUrl = "http://localhost:8100/park/getData";

  const response = await fetch(dataUrl);
  const resJson = await response.json();

  return resJson;
}

export async function postRanking(tier, line, ver){
  const response = await fetch('http://localhost:8100/park/getdata/po',{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          info: {
              tier: tier,
              line: line,
              ver: ver,
          }
      }),
  }).catch(error=>console.log('fetch에러사항:',error));
  const data = await response.json();
  return await data;
}

export async function ChampionDetailDataApi() {
  const dataUrl = "http://localhost:8100/park/getData2";

  const response = await fetch(dataUrl);
  const resJson = await response.json();
  
  return resJson[0];
}


export async function postChampionDetailDataApi(champId){
    const response = await fetch('http://localhost:8100/park/getdata2/po',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({ id : champId }),
    }).catch(error=>console.log('fetch에러사항: ',error));
    const data = await response.json();
    return await data;
}