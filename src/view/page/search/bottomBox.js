import { MatchButtons, MatchButton } from "view/page/search/searchStyle/bottomBoxStyle.js";
import { useState } from "react";
import StatisticBox from "view/page/search/statisticBox"
import MatchesBox from "view/page/search/matchesBox"
import DetailMatchBox from "view/page/search/detailMatchBox";

function BottomBox(props) {
  const [selectedButton, setSelectedButton] = useState('whole');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <MatchButtons>
        <MatchButton value={selectedButton} isclick={'whole'} onClick={() => handleButtonClick('whole')} >전체</MatchButton>
        <MatchButton value={selectedButton} isclick={'solo'} onClick={() => handleButtonClick('solo')} >솔로랭크</MatchButton>
        <MatchButton value={selectedButton} isclick={'team'} onClick={() => handleButtonClick('team')} >자유랭크</MatchButton>
        <MatchButton value={selectedButton} isclick={'normal'} onClick={() => handleButtonClick('normal')} >일반</MatchButton>
      </MatchButtons>
      <br />
      <StatisticBox />
      <br />
      <br />
      <MatchesBox data={props.data}/>
      <DetailMatchBox></DetailMatchBox>
      {/* 더보기 버튼? */}
    </div>
  );
}

export default BottomBox;