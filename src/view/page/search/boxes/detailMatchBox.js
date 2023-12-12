import * as styled from "../searchStyle/detailMatchBoxStyle";
import * as fd from "../dataHandling/filterData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { runeUrl, spellUrl } from "model/constantly/apiConstants";
import { BaronPath, dragonPath, towerPath } from "model/imagePath";

function DetailMatchBox(props) {
  return (
    <styled.CoverDetailMatchBox isvisible={props.isvisible}>
      <MatchLabel index={props.index} />
      <MatchDetailBlueTableBox index={props.index} tierList={props.tierList} />
      <MatchDetailRedTableBox index={props.index} tierList={props.tierList} />
    </styled.CoverDetailMatchBox>
  );
}

function MatchLabel(props) {
  const { data } = useSelector((state) => state.data);
  const matchesIndex = props.index;

  return (
    <div>
      {data && <styled.MatchLabel>
        <styled.MatchLabelSpan>
          <styled.WinBlueLabelSpan time={data.matches[matchesIndex].gameDuration} win={data.matches[matchesIndex].teams[0].win} >{
            data.matches[matchesIndex].gameDuration < 180 ? "다시하기" : (data.matches[matchesIndex].teams[0].win ? "승리" : "패배")
          }</styled.WinBlueLabelSpan>
          <styled.Font1Span>블루팀</styled.Font1Span>
        </styled.MatchLabelSpan>
        <styled.MatchLabelSpan>
          <styled.svgImg>
            <styled.svgPath d={towerPath} win={data.matches[matchesIndex].teams[0].win} />
          </styled.svgImg>
          <styled.Font1Span>{data.matches[matchesIndex].teams[0].objectives.tower.kills}</styled.Font1Span>
          <styled.svgImg>
            <styled.svgPath d={dragonPath} win={data.matches[matchesIndex].teams[0].win} />
          </styled.svgImg>
          <styled.Font1Span>{data.matches[matchesIndex].teams[0].objectives.dragon.kills}</styled.Font1Span>
          <styled.svgImg>
            <styled.svgPath d={BaronPath} win={data.matches[matchesIndex].teams[0].win} />
          </styled.svgImg>
          <styled.Font1Span>{data.matches[matchesIndex].teams[0].objectives.baron.kills}</styled.Font1Span>
        </styled.MatchLabelSpan>
        <styled.MatchLabelSpan>
          <styled.GoldImg src={`${process.env.PUBLIC_URL}` + `assets/images/yellow-coin-icon-original.svg`} />
          <styled.Font1Span>{(() => {
            let goldBlue = 0;

            [0, 1, 2, 3, 4].forEach((num) => {
              goldBlue += Number(data.matches[matchesIndex].participants[num].goldEarned);
            });
            const formattedGold = Math.floor(goldBlue / 100) / 10;
            return formattedGold + "K";
          })()}</styled.Font1Span>
        </styled.MatchLabelSpan>
        <styled.MatchLabelB>{data.matches[matchesIndex].teams[0].objectives.champion.kills}</styled.MatchLabelB>
        <b>VS</b>
        <styled.MatchLabelB>{data.matches[matchesIndex].teams[1].objectives.champion.kills}</styled.MatchLabelB>
        <styled.MatchLabelSpan>
          <styled.GoldImg src={`${process.env.PUBLIC_URL}` + `assets/images/yellow-coin-icon-original.svg`} />
          <styled.Font1Span>{(() => {
            let goldRed = 0;

            [5, 6, 7, 8, 9].forEach((num) => {
              goldRed += Number(data.matches[matchesIndex].participants[num].goldEarned);
            });
            const formattedGold = Math.floor(goldRed / 100) / 10;
            return formattedGold + "K";
          })()}</styled.Font1Span>
        </styled.MatchLabelSpan>
        <styled.MatchLabelSpan>
          <styled.svgImg>
            <styled.svgPath d={towerPath} win={data.matches[matchesIndex].teams[1].win} />
          </styled.svgImg>
          <styled.Font1Span>{data.matches[matchesIndex].teams[1].objectives.tower.kills}</styled.Font1Span>
          <styled.svgImg>
            <styled.svgPath d={dragonPath} win={data.matches[matchesIndex].teams[1].win} />
          </styled.svgImg>
          <styled.Font1Span>{data.matches[matchesIndex].teams[1].objectives.dragon.kills}</styled.Font1Span>
          <styled.svgImg>
            <styled.svgPath d={BaronPath} win={data.matches[matchesIndex].teams[1].win} />
          </styled.svgImg>
          <styled.Font1Span>{data.matches[matchesIndex].teams[1].objectives.baron.kills}</styled.Font1Span>
        </styled.MatchLabelSpan>
        <styled.MatchLabelSpan>
          <styled.Font1Span>레드팀</styled.Font1Span>
          <styled.WinRedLabelSpan time={data.matches[matchesIndex].gameDuration} win={data.matches[matchesIndex].teams[1].win} >{
            data.matches[matchesIndex].gameDuration < 180 ? "다시하기" : (data.matches[matchesIndex].teams[1].win ? "승리" : "패배")
          }</styled.WinRedLabelSpan>
        </styled.MatchLabelSpan>
      </styled.MatchLabel>}
    </div>
  );
}

function MatchDetailBlueTableBox(props) {
  const { data } = useSelector((state) => state.data);
  const matchesIndex = props.index;
  const [spellInfo, setSpellInfo] = useState({});
  const [runeInfo, setRuneInfo] = useState({});

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

  return (
    <styled.MatchDetailTable>
      <colgroup>
        <col width={"30%"} />
        <col width={"12%"} />
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"8%"} />
        <col width={"30%"} />
      </colgroup>
      <styled.MatchDetailTableLabel>
        <th>블루팀</th>
        <th>딜량</th>
        <th>KDA</th>
        <th>CS</th>
        <th>와드</th>
        <th>아이템</th>
      </styled.MatchDetailTableLabel>
      {
        [0, 1, 2, 3, 4].map((num) => {
          return (data && <styled.TableTr $backgroundColor={'#2f436e'} key={num}>
            <styled.TableTd>
              <styled.IconDiv>
                <styled.ChampIconSpan>
                  <styled.ChampImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                  <styled.LevelDiv>{data.matches[matchesIndex].participants[num].champLevel}</styled.LevelDiv>
                </styled.ChampIconSpan>
                <span>
                  {spellInfo && <div>
                    <styled.Spell1Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner1Id))} />
                    <styled.Spell2Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner2Id))} />
                  </div>}
                  {runeInfo && <div>
                    <styled.Perk1Img src={fd.GetMainRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[0].style, data.matches[matchesIndex].participants[num].perks.styles[0].selections[0].perk)} />
                    <styled.Perk2Img src={fd.GetSubRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[1].style)} />
                  </div>}
                </span>
              </styled.IconDiv>
              <styled.NickTierDiv>
                <styled.PartiName>{
                  data.matches[matchesIndex].participants[num].summonerName === ""
                    ? data.matches[matchesIndex].participants[num].riotIdGameName
                    : data.matches[matchesIndex].participants[num].summonerName
                }</styled.PartiName>
                <styled.Font3Div>{props.tierList[num]}</styled.Font3Div>
              </styled.NickTierDiv>
            </styled.TableTd>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalDamageDealtToChampions}</div>
              <div>
                <styled.DamageGraphDiv>
                  <styled.RedBarDiv style={{ width: `${data.matches[matchesIndex].participants[num].totalDamageDealtToChampions / fd.GetMostDamage(data, matchesIndex) * 60}px` }} />
                </styled.DamageGraphDiv>
              </div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].kills}/{data.matches[matchesIndex].participants[num].deaths}/{data.matches[matchesIndex].participants[num].assists}</div>
              <styled.Font3Div>{`(${data.matches[matchesIndex].participants[num].deaths === 0
                ? "Perfect"
                : ((data.matches[matchesIndex].participants[num].kills + data.matches[matchesIndex].participants[num].assists) / data.matches[matchesIndex].participants[num].deaths).toFixed(2)
                })`}</styled.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled}</div>
              <styled.Font3Div>{`(${((data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled) / data.matches[matchesIndex].gameDuration * 60).toFixed(1)})`}</styled.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].wardsPlaced}</div>
              <styled.Font3Div>{`(${data.matches[matchesIndex].participants[num].wardsPlaced - data.matches[matchesIndex].participants[num].detectorWardsPlaced}/${data.matches[matchesIndex].participants[num].detectorWardsPlaced})`}</styled.Font3Div>
            </td>
            <td>
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item0)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item1)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item2)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item3)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item4)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item5)} />
              <styled.WardImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item6)} />
            </td>
          </styled.TableTr>);
        })
      }
    </styled.MatchDetailTable>
  );
}

function MatchDetailRedTableBox(props) {
  const { data } = useSelector((state) => state.data);
  const matchesIndex = props.index;
  const [spellInfo, setSpellInfo] = useState({});
  const [runeInfo, setRuneInfo] = useState({});

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

  return (
    <styled.MatchDetailTable>
      <colgroup>
        <col width={"30%"} />
        <col width={"12%"} />
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"8%"} />
        <col width={"30%"} />
      </colgroup>
      <styled.MatchDetailTableLabel>
        <th>레드팀</th>
        <th>딜량</th>
        <th>KDA</th>
        <th>CS</th>
        <th>와드</th>
        <th>아이템</th>
      </styled.MatchDetailTableLabel>
      {
        [5, 6, 7, 8, 9].map((num) => {
          return (data && <styled.TableTr $backgroundColor={'#703c47'} key={num}>
            <styled.TableTd>
              <styled.IconDiv>
                <styled.ChampIconSpan>
                  <styled.ChampImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                  <styled.LevelDiv>{data.matches[matchesIndex].participants[num].champLevel}</styled.LevelDiv>
                </styled.ChampIconSpan>
                <span>
                  {spellInfo && <div>
                    <styled.Spell1Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner1Id))} />
                    <styled.Spell2Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner2Id))} />
                  </div>}
                  {runeInfo && <div>
                    <styled.Perk1Img src={fd.GetMainRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[0].style, data.matches[matchesIndex].participants[num].perks.styles[0].selections[0].perk)} />
                    <styled.Perk2Img src={fd.GetSubRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[1].style)} />
                  </div>}
                </span>
              </styled.IconDiv>
              <styled.NickTierDiv>
                <styled.PartiName>{
                      data.matches[matchesIndex].participants[num].summonerName === ""
                        ? data.matches[matchesIndex].participants[num].riotIdGameName
                        : data.matches[matchesIndex].participants[num].summonerName
                    }</styled.PartiName>
                <styled.Font3Div>{props.tierList[num]}</styled.Font3Div>
              </styled.NickTierDiv>
            </styled.TableTd>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalDamageDealtToChampions}</div>
              <div>
                <styled.DamageGraphDiv>
                  <styled.RedBarDiv style={{ width: `${data.matches[matchesIndex].participants[num].totalDamageDealtToChampions / fd.GetMostDamage(data, matchesIndex) * 60}px` }} />
                </styled.DamageGraphDiv>
              </div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].kills}/{data.matches[matchesIndex].participants[num].deaths}/{data.matches[matchesIndex].participants[num].assists}</div>
              <styled.Font3Div>{`(${data.matches[matchesIndex].participants[num].deaths === 0
                ? "Perfect"
                : ((data.matches[matchesIndex].participants[num].kills + data.matches[matchesIndex].participants[num].assists) / data.matches[matchesIndex].participants[num].deaths).toFixed(2)
                })`}</styled.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled}</div>
              <styled.Font3Div>{`(${((data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled) / data.matches[matchesIndex].gameDuration * 60).toFixed(1)})`}</styled.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].wardsPlaced}</div>
              <styled.Font3Div>{`(${data.matches[matchesIndex].participants[num].wardsPlaced - data.matches[matchesIndex].participants[num].detectorWardsPlaced}/${data.matches[matchesIndex].participants[num].detectorWardsPlaced})`}</styled.Font3Div>
            </td>
            <td>
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item0)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item1)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item2)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item3)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item4)} />
              <styled.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item5)} />
              <styled.WardImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item6)} />
            </td>
          </styled.TableTr>);
        })
      }
    </styled.MatchDetailTable>
  );
}

export default DetailMatchBox;