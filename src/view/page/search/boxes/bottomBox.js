import { MatchButtons, MatchButton, MoreMatchButton } from "../searchStyle/bottomBoxStyle.js";
import { useState } from "react";
import StatisticBox from "../boxes/statisticBox";
import MatchesBox from "../boxes/matchesBox";
import { BlankDiv } from "../searchStyle/topBoxStyle";
import { useDispatch, useSelector } from "react-redux";
import GetMatchData from "../dataHandling/api/getMatchData.js";
import { fetchDataSuccess } from "reduxTest/dataSlice.js";

function BottomBox() {
  const [selectedButton, setSelectedButton] = useState('whole');
  const [matchList, setMatchList] = useState([0, 1]);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleMoreButtonClick = () => {
    const newList = [...matchList];
    newList.push(newList.length);

    GetMatchData(data.matchList[newList.length-1],data.nickname).then((_data) => {
      console.log(_data);
      const newData = JSON.parse(JSON.stringify(data));
      newData.matches[newList.length-1] = _data.match;
      newData.partinum[newList.length-1] = _data.partinum;
      return newData;
    }).then((_newData)=>{
      dispatch(fetchDataSuccess(_newData));
      setMatchList(newList);
    })
  };

  // useEffect(() => {
  //   if (!isMounted.current) {
  //     GetMatchData(data.matchList[matchList.length-1], matchList.length-1).then((_data) => {
  //       console.log(_data);
  //     })
  //   }
  // }, [matchList]);

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
      {matchList && <MatchesBox list={matchList} />}
      <MoreMatchButton onClick={handleMoreButtonClick}>MORE +</MoreMatchButton>
    </div>
  );
}

export default BottomBox;