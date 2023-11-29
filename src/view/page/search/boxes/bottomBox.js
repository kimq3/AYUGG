import { MatchButtons, MatchButton, MoreMatchButton } from "../searchStyle/bottomBoxStyle.js";
import { useState } from "react";
import StatisticBox from "../boxes/statisticBox";
import MatchesBox from "../boxes/matchesBox";
import { BlankDiv } from "../searchStyle/topBoxStyle";

function BottomBox() {
  const [selectedButton, setSelectedButton] = useState('whole');
  const [matchList, setMatchList] = useState([0,1]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleMoreButtonClick = () => {
    const newList = [...matchList];
    newList.push(newList.length);
    setMatchList(newList);
  };

  return (
    <div>
      <MatchButtons>
        <MatchButton value={selectedButton} isclick={'whole'} onClick={() => handleButtonClick('whole')} >전체</MatchButton>
        <MatchButton value={selectedButton} isclick={'rank'} onClick={() => handleButtonClick('rank')} >랭크</MatchButton>
        <MatchButton value={selectedButton} isclick={'normal'} onClick={() => handleButtonClick('normal')} >일반</MatchButton>
      </MatchButtons>
      <BlankDiv />
      <StatisticBox />
      <BlankDiv />
      <BlankDiv />
      <MatchesBox list={matchList} />
      <MoreMatchButton onClick={handleMoreButtonClick}>MORE +</MoreMatchButton>
    </div>
  );
}

export default BottomBox;