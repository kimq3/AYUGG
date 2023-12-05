import * as style from "./champsStyle";
// import { ChampionLineStats as RankingApi } from "model/constantly/apiConstants";

// const ranking = await RankingApi();

function NavTitle() {
  return (
    <>
      <style.RankingTitleBox>
        <style.RankingTitle $seq="start" $width="10%">
          순위
        </style.RankingTitle>
        <style.RankingTitle $width="30%">
          챔피언
        </style.RankingTitle>
        <style.RankingTitle $width="10%">
          승률
        </style.RankingTitle>
        <style.RankingTitle $width="10%">
          픽률
        </style.RankingTitle>
        <style.RankingTitle $width="10%">
          밴율
        </style.RankingTitle>
        <style.RankingTitle $seq="end" $width="30%">
          카운터
        </style.RankingTitle>
      </style.RankingTitleBox>
    </>
  )
}

// async function RankingData() {
  
// }

export default function ChampionsRanking() {
    
    return(
      <>
        <NavTitle />
      </>
    );
}