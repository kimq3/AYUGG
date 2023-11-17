import { useEffect, useState } from "react";


function VersionState() {
  const versionApi = "https://ddragon.leagueoflegends.com/api/versions.json";
  const [version, setVersion] = useState("");
  useEffect(() => {
    fetch(versionApi)
      .then((response) => response.json())
      .then((data) => setVersion(data[0]));
  }, []);

  return version;
}

export function ChampionApi() {
  const [champData, setChampData] = useState([]);
  let ver = VersionState();
  let verUrl = "https://ddragon.leagueoflegends.com/cdn/" + ver + "/";
  useEffect(() => {
    if (ver !== "") {
      fetch(verUrl + "data/ko_KR/champion.json")
        .then((response) => response.json())
        .then((data) => {
          let imgList = [];
          let nameList = [];
          let idList = [];
          const myData = []
            .concat(Object.values(data.data))
            .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
            .map((index) => {
              imgList.push(verUrl + "img/champion/" + index.image.full);
              nameList.push(index.name);
              idList.push(index.id);
            });
          let dataList = [];
          dataList.push(imgList);
          dataList.push(nameList);
          dataList.push(idList);
          return setChampData(dataList);
        });
    }
  }, [ver]);

  return champData;
}

export function ChampionDetailApi(){
  const [info, setInfo] = useState([]);
  
    async function fetchData() {
      await fetch("http://localhost:8100/park/garen")
        .then((response) => response.json())
        .then((data) => {
          setInfo(data.champData.data);
        });
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return info;
}

export const apiKey = "RGAPI-6e1b716a-027f-4306-930b-458ee9fb0229";
// NicknameUrl + encodedName[i] + "?api_key=" + apiKey (id, acountid puuid name profileIconId level)
export const nicknameUrl = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
// IdUrl + id + "?api_key=" + apiKey (티어,개인랭 승패 name) 
export const idUrl = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/";
// MatchesUrl + puuid + "/ids?count=5&api_key=" + apiKey; count가 match  갯수 (matchid)
export const matchesUrl = "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/";
// MatchDataUrl + matchid + "?api_key=" + apiKey (매치데이터)
export const matchDataUrl = "https://asia.api.riotgames.com/lol/match/v5/matches/"

// 이미지
export const version = "https://ddragon.leagueoflegends.com/cdn/13.21.1/data/ko_KR/";
export const championUrl = version + "champion.json";
export const iconUrl = version + "profileicon.json";

//티어api값이랑 png맵핑
export const tierImgMapping = new Map([
  ["NONE", "assets/images/tier-icons/provisional.png"],
  ["IRON", "assets/images/tier-icons/emblem-iron.png"],
  ["BRONZE", "assets/images/tier-icons/emblem-bronze.png"],
  ["SILVER", "assetsimages/tier-icons/emblem-silver.png"],
  ["GOLD", "assets/images/tier-icons/emblem-gold.png"],
  ["PLATINUM", "assets/images/tier-icons/emblem-platinum.png"],
  ["EMERALD", "assets/images/tier-icons/emblem-emerald.png"],
  ["DIAMOND", "assets/images/tier-icons/emblem-diamond.png"],
  ["MASTER", "assets/images/tier-icons/emblem-master.png"],
  ["GRANDMASTER", "assets/images/tier-icons/emblem-grandmaster.png"],
  ["CHALLENGER", "assets/images/tier-icons/emblem-challenger.png"],
]);

export const soloRankUrl = "https://kr.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I"; //랭킹, 랭킹 상세페이지에서 사용(현재 챌린저 1~200위 까지 표출 가능)
export const matchIdUrl2 = "/ids?start=0&count=10";// match id 추출 api 뒷부분

