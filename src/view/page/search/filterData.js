function GetQueueType(queueNum) {
  let returnString = "";
  if (queueNum === 420) {
    returnString = "솔로 랭크";
  } else if (queueNum === 430) {
    returnString = "일반 게임";
  } else if (queueNum === 440) {
    returnString = "자유 랭크";
  } else {
    returnString = "기타 게임";
  }
  return returnString;
}
function GetMatchDate(gameStartTimestamp) {
  const currentTime = new Date();
  let textContent;
  if (Math.floor((currentTime - gameStartTimestamp) / 3600000) < 24) {
    textContent = Math.floor((currentTime - gameStartTimestamp) / 3600000) + "시간전";
  } else {
    textContent = Math.floor((currentTime - gameStartTimestamp) / 3600000 / 24) + "일전";
  }
  return textContent;
}
function GetMatchTime(gameDuration) {
  let textContent = Math.floor(gameDuration / 60) + ":" + (gameDuration % 60).toString().padStart(2, "0");
  return textContent;
}
function GetChampImg(championName) {
  const version = "https://ddragon.leagueoflegends.com/cdn/13.22.1/"
  const champUrl = version + "data/ko_KR/champion/" + championName + ".json";
  return champUrl;
}

export { GetQueueType, GetMatchDate, GetMatchTime, GetChampImg};