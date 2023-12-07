import { useEffect, useState } from "react";
import * as styled from "./champsStyle";
import { ChampionLineStats as RankingApi } from "model/api/champions";

const ranking = await RankingApi();

function NavTitle() {
  return (
    <>
      <styled.RankingTitleBox>
        <styled.RankingTitle $seq="start" $width="10%">
          순위
        </styled.RankingTitle>
        <styled.RankingTitle $width="30%">
          챔피언
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          승률
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          픽률
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          밴율
        </styled.RankingTitle>
        <styled.RankingTitle $seq="end" $width="30%">
          카운터
        </styled.RankingTitle>
      </styled.RankingTitleBox>
    </>
  )
}

async function RankingData() {
  console.log(ranking);
  let rankingList = [];
  for(let i = 0; i < ranking.length; i++) {

  }


  return (<></>);
}

export default function ChampionsRanking() {
  const [ranking, setRanking] = useState();

  useEffect(() => {
    RankingData().then((data) => {
      setRanking(data);
    })
  }, [])
  return(
    <>
      <NavTitle />
      <styled.RankingWrapperBox>
        {ranking}
      </styled.RankingWrapperBox>
    </>
  );
}