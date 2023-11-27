import { MatchButtons, MatchButton, MoreMatchButton } from "view/page/search/searchStyle/bottomBoxStyle.js";
import { useState } from "react";
import StatisticBox from "view/page/search/boxes/statisticBox"
import MatchesBox from "view/page/search/boxes/matchesBox"

function BottomBox() {
  const [selectedButton, setSelectedButton] = useState('whole');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <MatchButtons>
        <MatchButton value={selectedButton} isclick={'whole'} onClick={() => handleButtonClick('whole')} >전체</MatchButton>
        <MatchButton value={selectedButton} isclick={'rank'} onClick={() => handleButtonClick('rank')} >랭크</MatchButton>
        <MatchButton value={selectedButton} isclick={'normal'} onClick={() => handleButtonClick('normal')} >일반</MatchButton>
      </MatchButtons>
      <br />
      <StatisticBox />
      <br />
      <br />
      <MatchesBox />
      <MoreMatchButton>MORE +</MoreMatchButton>
    </div>
  );
}

export default BottomBox;