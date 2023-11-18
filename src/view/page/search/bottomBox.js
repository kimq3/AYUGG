import { MatchButtons, MatchButton } from "view/page/search/searchStyle/bottomBoxStyle.js";
import { useState } from "react";
import StatisticBox from "view/page/search/statisticBox"

function BottomBox() {
  const [selectedButton, setSelectedButton] = useState('whole');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <MatchButtons>
        <MatchButton isActive={selectedButton === 'whole'} onClick={() => handleButtonClick('whole')} >전체</MatchButton>
        <MatchButton isActive={selectedButton === 'solo'} onClick={() => handleButtonClick('solo')} >솔로랭크</MatchButton>
        <MatchButton isActive={selectedButton === 'team'} onClick={() => handleButtonClick('team')} >자유랭크</MatchButton>
        <MatchButton isActive={selectedButton === 'normal'} onClick={() => handleButtonClick('normal')} >일반</MatchButton>
      </MatchButtons>
      <br />
      <StatisticBox />
      {/* <MatchBox></MatchBox> */}
    </div>
  );
}

export default BottomBox;