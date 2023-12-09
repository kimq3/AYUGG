import * as match from "../searchStyle/matchesBoxStyle";
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
        {data && <match.MatchDiv time={data.matches[matchesIndex].gameDuration} win={data.matches[matchesIndex].participants[data.partinum[matchesIndex]].win}>
          <match.MatchFirstDiv>
            <match.Font1Div>{fd.GetQueueType(data.matches[matchesIndex].queueId)}</match.Font1Div>
            <match.Font2Div>{fd.GetMatchDate(data.matches[matchesIndex].gameStartTimestamp)}</match.Font2Div>
            <match.Font2Div>{fd.GetMatchTime(data.matches[matchesIndex].gameDuration)}</match.Font2Div>
          </match.MatchFirstDiv>
          <match.MatchSecondDiv>
            <match.ChampImg src={fd.GetChampImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].championName)} />
            <span>
              {spellInfo && <div>
                <match.Spell1Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].summoner1Id))} />
                <match.Spell2Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].summoner2Id))} />
              </div>}
              {runeInfo && <div>
                <match.Perk1Img src={fd.GetMainRuneImg(runeInfo, data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].style, data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].selections[0].perk)} />
                <match.Perk2Img src={fd.GetSubRuneImg(runeInfo, data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[1].style)} />
              </div>}
            </span>
          </match.MatchSecondDiv>
          <div>
            <match.Font1Div>{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills}/{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].deaths}/{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists}</match.Font1Div>
            <match.Font2Div>{data.matches[matchesIndex].participants[data.partinum[matchesIndex]].deaths === 0
              ? "Perfect"
              : ((data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists) / data.matches[matchesIndex].participants[data.partinum[matchesIndex]].deaths).toFixed(2)}</match.Font2Div>
          </div>
          <div>
            <match.KillRateCsDiv>
              <match.Font2Span1>킬관여 {data.matches[matchesIndex].participants[data.partinum[matchesIndex]].teamId === 100
                ? Math.floor((data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists) / data.matches[matchesIndex].teams[0].objectives.champion.kills * 100)
                : Math.floor((data.matches[matchesIndex].participants[data.partinum[matchesIndex]].kills + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].assists) / data.matches[matchesIndex].teams[1].objectives.champion.kills * 100)
              }%</match.Font2Span1>
              <match.Font2Span2>CS {data.matches[matchesIndex].participants[data.partinum[matchesIndex]].totalMinionsKilled + data.matches[matchesIndex].participants[data.partinum[matchesIndex]].neutralMinionsKilled}</match.Font2Span2>
            </match.KillRateCsDiv>
            <span>
              <match.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item0)} />
              <match.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item1)} />
              <match.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item2)} />
              <match.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item3)} />
              <match.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item4)} />
              <match.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item5)} />
              <match.Item6Img src={fd.GetItemImg(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].item6)} />
            </span>
          </div>
          <match.MatchFifthDiv>
            <match.PartiListUl>
              {[0, 1, 2, 3, 4].map((num) => {
                return (
                  <li style={{ display: 'flex' }} key={num}>
                    <match.PartiImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                    <match.PartiName onClick={() => NicknameClick(data.matches[matchesIndex].participants[num].summonerName)}>{
                      data.matches[matchesIndex].participants[num].summonerName === ""
                        ? data.matches[matchesIndex].participants[num].riotIdGameName
                        : data.matches[matchesIndex].participants[num].summonerName
                    }</match.PartiName>
                  </li>
                )
              })}
            </match.PartiListUl>
            <match.PartiListUl>
              {[5, 6, 7, 8, 9].map((num) => {
                return (
                  <li style={{ display: 'flex' }} key={num}>
                    <match.PartiImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                    <match.PartiName onClick={() => NicknameClick(data.matches[matchesIndex].participants[num].summonerName)}>{
                      data.matches[matchesIndex].participants[num].summonerName === ""
                        ? data.matches[matchesIndex].participants[num].riotIdGameName
                        : data.matches[matchesIndex].participants[num].summonerName
                    }</match.PartiName>
                  </li>
                )
              })}
            </match.PartiListUl>
          </match.MatchFifthDiv>
          <div />
        </match.MatchDiv>}
        <match.OpenDiv onClick={clickDropdown}>
          <match.OpenImg src={`${process.env.PUBLIC_URL}` + 'assets/images/down-arrow.svg'} />
        </match.OpenDiv>
      </div>
      <DetailMatchBox isvisible={isDropdownVisible} index={matchesIndex} tierList={tierList} />
    </div>
  );
}

export default MatchesBox;