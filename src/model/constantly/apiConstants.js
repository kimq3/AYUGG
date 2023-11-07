import { useEffect, useState } from "react";

export const api_key="RGAPI-6e1b716a-027f-4306-930b-458ee9fb0229"; //라이엇 API 기업형 API key

function VersionState() {
    const versionApi = "https://ddragon.leagueoflegends.com/api/versions.json";
    const [version, setVersion] = useState("");
    useEffect(() => {
        fetch(versionApi)
            .then(response => response.json())
            .then(data => setVersion(data[0]));
    },[]);

    return version;
}

export function ChampionApi() {
    const [champData, setChampData] = useState([]);
    let ver = VersionState();
    let verUrl = "https://ddragon.leagueoflegends.com/cdn/"+ ver + "/";
    useEffect(() => {
        if(ver !== ""){
            fetch(verUrl + "data/ko_KR/champion.json")
            .then(response => response.json())
            .then((data)=>{
                let imgList = [];
                let nameList = [];
                const myData = [].concat(Object.values(data.data))
                    .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
                    .map((index) => {
                        imgList.push(verUrl + "img/champion/" + index.image.full);
                        nameList.push(index.name);
                    });
                let dataList = [];
                dataList.push(imgList);
                dataList.push(nameList);
                return setChampData(dataList);
            })
        }}
    ,[ver]);

    return champData;
}


export const solo_rank_url="https://kr.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I"; //랭킹, 랭킹 상세페이지에서 사용
export const summoner_url="https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name"; //유저 네임으로 간단 정보 추출 가능