export default function GetQueueType(queueNum) {
  let returnString = "111";
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