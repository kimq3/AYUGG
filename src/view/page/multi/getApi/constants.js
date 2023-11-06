const apiKey = "RGAPI-6e1b716a-027f-4306-930b-458ee9fb0229";
// NicknameUrl + encodedName[i] + "?api_key=" + apiKey
const NicknameUrl = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
// IdUrl + data[0] + "?api_key=" + apiKey
const IdUrl = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/";
// data[2] + "/ids?count=5&api_key=" + apiKey;
const MatchUrl = "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/";
const version = "https://ddragon.leagueoflegends.com/cdn/13.21.1/data/ko_KR/";
const championUrl = version + "champion.json";
const iconUrl = version + "profileicon.json";

const tierImgMapping = new Map([
    ["NONE", "/images/tier-icons/provisional.png"],
    ["IRON", "/images/tier-icons/emblem-iron.png"],
    ["BRONZE", "/images/tier-icons/emblem-bronze.png"],
    ["SILVER", "/images/tier-icons/emblem-silver.png"],
    ["GOLD", "/images/tier-icons/emblem-gold.png"],
    ["PLATINUM", "/images/tier-icons/emblem-platinum.png"],
    ["DIAMOND", "/images/tier-icons/emblem-diamond.png"],
    ["MASTER", "/images/tier-icons/emblem-master.png"],
    ["GRANDMASTER", "/images/tier-icons/emblem-grandmaster.png"],
    ["CHALLENGER", "/images/tier-icons/emblem-challenger.png"],
  ]);