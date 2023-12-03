import { MatchButtons, MatchButton, MoreMatchButton } from "../searchStyle/bottomBoxStyle.js";
import { useState } from "react";
import StatisticBox from "../boxes/statisticBox";
import MatchesBox from "../boxes/matchesBox";
import { BlankDiv } from "../searchStyle/topBoxStyle";
import { useDispatch, useSelector } from "react-redux";
import GetMatchData from "../dataHandling/api/getMatchData.js";
import { fetchDataSuccess } from "reduxTest/dataSlice.js";
import GetQueueData from "../dataHandling/api/getQueueData.js";
import GetStatisticData from "../dataHandling/statisticData.js";

function BottomBox() {
  const [selectedButton, setSelectedButton] = useState('whole');
  const [matchList, setMatchList] = useState([0, 1]);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setMatchList([0, 1]);

    if (buttonName === 'whole') {
      GetQueueData(data.nickname, data.puuid, 10000).then((_data) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData.matchList = _data.matchList;
        newData.matches = _data.matches;
        newData.partinum = _data.partinum;
        return newData;
      }).then((_newData) => {
        dispatch(fetchDataSuccess(_newData));
      }).catch(() => {
        alert("매치 데이터가 존재하지 않습니다.");
        return;
      })
    } else if (buttonName === 'solo') {
      GetQueueData(data.nickname, data.puuid, 420).then((_data) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData.matchList = _data.matchList;
        newData.matches = _data.matches;
        newData.partinum = _data.partinum;
        return newData;
      }).then((_newData) => {
        dispatch(fetchDataSuccess(_newData));
      }).catch(() => {
        alert("매치 데이터가 존재하지 않습니다.");
        return;
      });
    } else if (buttonName === 'team') {
      GetQueueData(data.nickname, data.puuid, 440).then((_data) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData.matchList = _data.matchList;
        newData.matches = _data.matches;
        newData.partinum = _data.partinum;
        return newData;
      }).then((_newData) => {
        dispatch(fetchDataSuccess(_newData));
      }).catch(() => {
        alert("매치 데이터가 존재하지 않습니다.");
        return;
      });
    } else if (buttonName === 'normal') {
      GetQueueData(data.nickname, data.puuid, 490).then((_data) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData.matchList = _data.matchList;
        newData.matches = _data.matches;
        newData.partinum = _data.partinum;
        return newData;
      }).then((_newData) => {
        dispatch(fetchDataSuccess(_newData));
      }).catch(() => {
        alert("매치 데이터가 존재하지 않습니다.");
        return;
      });
    }

  };

  const handleMoreButtonClick = () => {
    const newList = [...matchList];
    newList.push(newList.length);

    GetMatchData(data.matchList[newList.length - 1], data.nickname).then((_data) => {
      const newData = JSON.parse(JSON.stringify(data));
      newData.matches[newList.length - 1] = _data.match;
      newData.partinum[newList.length - 1] = _data.partinum;
      return newData;
    }).then((_newData) => {
      dispatch(fetchDataSuccess(_newData));
      setMatchList(newList);
    }).catch(() => {
      alert("더 이상의 매치를 불러올수 없습니다.");
      return;
    });
  };

  return (
    <div>
      <MatchButtons>
        <MatchButton value={selectedButton} isclick={'whole'} onClick={() => handleButtonClick('whole')} >전체</MatchButton>
        <MatchButton value={selectedButton} isclick={'solo'} onClick={() => handleButtonClick('solo')} >솔로 랭크</MatchButton>
        <MatchButton value={selectedButton} isclick={'team'} onClick={() => handleButtonClick('team')} >자유 랭크</MatchButton>
        <MatchButton value={selectedButton} isclick={'normal'} onClick={() => handleButtonClick('normal')} >일반</MatchButton>
      </MatchButtons>
      <BlankDiv />
      {data && <StatisticBox data={GetStatisticData(data)} />}
      <BlankDiv />
      <BlankDiv />
      {matchList && <MatchesBox list={matchList} />}
      <MoreMatchButton onClick={handleMoreButtonClick}>MORE +</MoreMatchButton>
    </div>
  );
}

export default BottomBox;