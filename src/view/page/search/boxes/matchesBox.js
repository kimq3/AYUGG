import * as styled from "../searchStyle/matchesBoxStyle";
import * as fd from "../dataHandling/filterData";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { runeUrl, spellUrl } from "model/constantly/apiConstants";
import DetailMatchBox from "../boxes/detailMatchBox";
import GetTierList from "../dataHandling/api/getTier";
import { useNavigate } from "react-router";

function MatchesBox(props) {
  return (
    <div>
      {props.list.map((num) => {
        return <MatchBox key={num} value={num} />
      })}
    </div>
  );
}
function MatchBox(props) {
  const { data } = useSelector((state) => state.data);
  const matchesIndex = props.value;
  const [spellInfo, setSpellInfo] = useState({});
  const [runeInfo, setRuneInfo] = useState({});
  const [isDropdownVisible, setDropdownVisible] = useState('false');
  const [tierList, setTierList] = useState([]);
  let navigate = useNavigate();

  const clickDropdown = () => {
    if (isDropdownVisible === 'true') {
      setDropdownVisible('false');
    } else {
      GetTierList(data, matchesIndex).then((_data) => {
        setTierList(_data);
      });
      setDropdownVisible('true');
    }
  };

  useEffect(() => {
    fetch(spellUrl)
      .then((response) => response.json())
      .then((data) => {
        setSpellInfo(data.data);
      });
    fetch(runeUrl)
      .then((response) => response.json())
      .then((data) => {
        setRuneInfo(data);
      });
  }, []);

  const NicknameClick = (_nickname) => {
    if (_nickname === "") {
      alert("SummonerName 의 정보가 없습니다");
    } else {
      navigate('/search', { state: { nickname: _nickname } });
      window.location.reload();
    }
  };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        {data && <styled.MatchDiv time={data.matches[matchesIndex].gameDuration} win={data.matches[matchesIndex].participants[data.partinum[matchesIndex]].win}>
          <styled.MatchFirstDiv>
            <styled.Font1Div>{fd.GetQueueType(data.matches[matchesIndex].queueId)}</styled.Font1Div>
            <styled.Font2Div>{fd.GetMatchDate(data.matches[matchesIndex].gameStartTimestamp)}</styled.Font2Div>
            <styled.Font2Div>{fd.GetMatchTime(data.matches[matchesIndex].gameDuration)}</styled.Font2Div>
          </styled.MatchFirstDiv>
          <styled.MatchSecondDiv>
            <styled.ChampImg src={fd.GetChampImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].championName)} />
            <span>
              {spellInfo && <div>
                <styled.Spell1Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].summoner1Id))} />
                <styled.Spell2Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].summoner2Id))} />
              </div>}
              {runeInfo && <div>
                <styled.Perk1Img src={fd.GetMainRuneImg(runeInfo, data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].style, data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].selections[0].perk)} />
                <styled.Perk2Img src={fd.GetSubRuneImg(runeInfo, data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[1].style)} />
              </div>}
            </span>
          </styled.MatchSecondDiv>
          <div>
            <styled.Font1Div>{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills}/{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].deaths}/{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists}</styled.Font1Div>
            <styled.Font2Div>{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].deaths === 0
              ? "Perfect"
              : ((data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists) / data.matches[matchesIndex].participants[data.partinum[matchesIndex]].deaths).toFixed(2)}</styled.Font2Div>
          </div>
          <div>
            <styled.KillRateCsDiv>
              <styled.Font2Span1>킬관여 {data.matches[matchesIndex].participants[data.partinum[matchesIndex]].teamId === 100
                ? Math.floor((data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists) / data.matches[matchesIndex].teams[0].objectives.champion.kills * 100)
                : Math.floor((data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists) / data.matches[matchesIndex].teams[1].objectives.champion.kills * 100)
              }%</styled.Font2Span1>
              <styled.Font2Span2>CS {data.matches[matchesIndex].participants[data.partinum[matchesIndex]].totalMinionsKilled + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].neutralMinionsKilled}</styled.Font2Span2>
            </styled.KillRateCsDiv>
            <span>
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item0)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item1)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item2)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item3)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item4)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item5)} />
              <styled.Item6Img src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item6)} />
            </span>
          </div>
          <styled.MatchFifthDiv>
            <styled.PartiListUl>
              {[0, 1, 2, 3, 4].map((num) => {
                return (
                  <li style={{ display: 'flex' }} key={num}>
                    <styled.PartiImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                    <styled.PartiName onClick={() => NicknameClick(data.matches[matchesIndex].participants[num].summonerName)}>{
                      data.matches[matchesIndex].participants[num].summonerName === ""
                        ? data.matches[matchesIndex].participants[num].riotIdGameName
                        : data.matches[matchesIndex].participants[num].summonerName
                    }</styled.PartiName>
                  </li>
                )
              })}
            </styled.PartiListUl>
            <styled.PartiListUl>
              {[5, 6, 7, 8, 9].map((num) => {
                return (
                  <li style={{ display: 'flex' }} key={num}>
                    <styled.PartiImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                    <styled.PartiName onClick={() => NicknameClick(data.matches[matchesIndex].participants[num].summonerName)}>{
                      data.matches[matchesIndex].participants[num].summonerName === ""
                        ? data.matches[matchesIndex].participants[num].riotIdGameName
                        : data.matches[matchesIndex].participants[num].summonerName
                    }</styled.PartiName>
                  </li>
                )
              })}
            </styled.PartiListUl>
          </styled.MatchFifthDiv>
          <div />
        </styled.MatchDiv>}
        <styled.OpenDiv onClick={clickDropdown}>
          <styled.OpenImg src={`${process.env.PUBLIC_URL}` + 'assets/images/down-arrow.svg'} />
        </styled.OpenDiv>
      </div>
      <DetailMatchBox isvisible={isDropdownVisible} index={matchesIndex} tierList={tierList} />
    </div>
  );
}

export default MatchesBox;