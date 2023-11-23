import * as match from "view/page/search/searchStyle/matchesBoxStyle";
import * as fd from "view/page/search/filterData";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { runeUrl, spellUrl } from "model/constantly/apiConstants";

function MatchesBox() {

  return (
    <div>
      <MatchBox />
    </div>
  );
}
function MatchBox() {
  const { data, loading, error } = useSelector((state) => state.data);
  const matchesIndex = 0;
  const [spellInfo, setSpellInfo] = useState({});
  const [runeInfo, setRuneInfo] = useState({});

  useEffect(() => {
    fetch(spellUrl)
      .then((response) => response.json())
      .then((data) => {
        setSpellInfo(data.data);
      });
  }, []);
  useEffect(() => {
    fetch(runeUrl)
      .then((response) => response.json())
      .then((data) => {
        setRuneInfo(data);
      });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {data && <match.MatchDiv>{console.log(fd.GetMainRuneImg(runeInfo, JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].style), JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].selections[0].perk)))}
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
              <match.Perk1Img src={"https://ddragon.leagueoflegends.com/cdn/img/" + fd.GetMainRuneImg(runeInfo, JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].style), JSON.stringify(data.matches[matchesIndex].participants[data.partinum[matchesIndex]].perks.styles[0].selections[0].perk))} />
              <match.Perk2Img />
            </div>}
          </span>
        </match.MatchSecondDiv>
        <div>
          <match.Font1Div>0/10/7</match.Font1Div>
          <match.Font2Div>0.7</match.Font2Div>
        </div>
        <div>
          <match.KillRateCsDiv>
            <match.Font2Span1>킬관여 43%</match.Font2Span1>
            <match.Font2Span2>CS 203</match.Font2Span2>
          </match.KillRateCsDiv>
          <span>
            <match.Item0Img />
            <match.Item1Img />
            <match.Item2Img />
            <match.Item3Img />
            <match.Item4Img />
            <match.Item5Img />
            <match.Item6Img />
          </span>
        </div>
        <match.MatchFifthDiv>
          <match.PartiListUl>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
          </match.PartiListUl>
          <match.PartiListUl>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
          </match.PartiListUl>
        </match.MatchFifthDiv>
        <div />
      </match.MatchDiv>}
      <match.OpenDiv>
        <match.OpenImg src={`${process.env.PUBLIC_URL}` + 'assets/images/down-arrow.svg'} />
      </match.OpenDiv>
    </div>
  );
}

export default MatchesBox;