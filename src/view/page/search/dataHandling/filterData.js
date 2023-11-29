const version = "https://ddragon.leagueoflegends.com/cdn/13.22.1/";
const imgUrl = "https://ddragon.leagueoflegends.com/cdn/img/";

export function GetPlayerIconImg(profileIconId) {
  const version = "https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/"
  const champUrl = version + profileIconId + ".png";
  return champUrl;
}
export function GetQueueType(queueNum) {
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
export function GetMatchDate(gameStartTimestamp) {
  const currentTime = new Date();
  let textContent;
  if (Math.floor((currentTime - gameStartTimestamp) / 3600000) < 24) {
    textContent = Math.floor((currentTime - gameStartTimestamp) / 3600000) + "시간전";
  } else {
    textContent = Math.floor((currentTime - gameStartTimestamp) / 3600000 / 24) + "일전";
  }
  return textContent;
}
export function GetMatchTime(gameDuration) {
  let textContent = Math.floor(gameDuration / 60) + ":" + (gameDuration % 60).toString().padStart(2, "0");
  return textContent;
}
export function GetChampImg(championName) {
  const champUrl = version + "img/champion/" + championName + ".png";
  return champUrl;
}
export function GetSpellImg(spellInfo, summonerId) {
  return version + "img/spell/" +
    Object.keys(spellInfo).find(key => spellInfo[key].key === summonerId) + ".png";
}
export function GetMainRuneImg(runeInfo, value1, value2) {
  for (let a = 0; a < runeInfo.length; a++) {
    if (runeInfo[a].id === value1) {
      for (let b = 0; b < runeInfo[a].slots[0].runes.length; b++) {
        if (runeInfo[a].slots[0].runes[b].id === value2) {
          return imgUrl + runeInfo[a].slots[0].runes[b].icon;
        }
      }
      return null;
    }
  }
  return null;
}
export function GetSubRuneImg(runeInfo, value) {
  for (let a = 0; a < runeInfo.length; a++) {
    if (runeInfo[a].id === value) {
      return imgUrl + runeInfo[a].icon;
    }
  }
  return null;
}
export function GetItemImg(item) {
  if (item === 0) {
     return `${process.env.PUBLIC_URL}` + "assets/images/item-none.jpg";
  } else {
    return version + "img/item/" + item + ".png";
  }
}
export function GetMostDamage(data, match) {
  let mostDamage = data.matches[match].participants[0].totalDamageDealtToChampions;
  for (let i = 1; i < 10; i++) {
    if ( mostDamage < data.matches[match].participants[i].totalDamageDealtToChampions ) {
      mostDamage = data.matches[match].participants[i].totalDamageDealtToChampions;
    }
  }
  return Number(mostDamage);
}