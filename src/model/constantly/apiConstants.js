export const apiKey = "RGAPI-d7f2268a-7c6a-4551-b4bd-092cb9d35f94";
export const apiKey1 = "RGAPI-d74a8161-2e24-4f5d-9d13-58fff80dac26";
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
export const spellUrl = version + "summoner.json";
export const runeUrl = version + "runesReforged.json";

//티어api값이랑 png맵핑
export const tierImgMapping = new Map([
  ["NONE", "assets/images/tier-icons/provisional.png"],
  ["IRON", "assets/images/tier-icons/emblem-iron.png"],
  ["BRONZE", "assets/images/tier-icons/emblem-bronze.png"],
  ["SILVER", "assets/images/tier-icons/emblem-silver.png"],
  ["GOLD", "assets/images/tier-icons/emblem-gold.png"],
  ["PLATINUM", "assets/images/tier-icons/emblem-platinum.png"],
  ["EMERALD", "assets/images/tier-icons/emblem-emerald.png"],
  ["DIAMOND", "assets/images/tier-icons/emblem-diamond.png"],
  ["MASTER", "assets/images/tier-icons/emblem-master.png"],
  ["GRANDMASTER", "assets/images/tier-icons/emblem-grandmaster.png"],
  ["CHALLENGER", "assets/images/tier-icons/emblem-challenger.png"],
]);

export const soloRankUrl = "https://kr.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I"; //랭킹, 랭킹 상세페이지에서 사용(현재 챌린저 1~200위 까지 표출 가능)
export const flexRankUrl = "https://kr.api.riotgames.com/lol/league-exp/v4/entries/RANKED_FLEX_SR/CHALLENGER/I";
export const matchIdUrl2 = "/ids?queue=420&start=0&count=10";// match id 추출 api 뒷부분

