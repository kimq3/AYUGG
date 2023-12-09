import * as dmb from "../searchStyle/detailMatchBoxStyle";
import * as fd from "../dataHandling/filterData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { runeUrl, spellUrl } from "model/constantly/apiConstants";
import { BaronPath, dragonPath, towerPath } from "model/imagePath";

function DetailMatchBox(props) {
  return (
    <dmb.CoverDetailMatchBox isvisible={props.isvisible}>
      <MatchLabel index={props.index} />
      <MatchDetailBlueTableBox index={props.index} tierList={props.tierList} />
      <MatchDetailRedTableBox index={props.index} tierList={props.tierList} />
    </dmb.CoverDetailMatchBox>
  );
}

function MatchLabel(props) {
  const { data } = useSelector((state) => state.data);
  const matchesIndex = props.index;

  return (
    <div>
      {data && <dmb.MatchLabel>
        <dmb.MatchLabelSpan>
          <dmb.WinBlueLabelSpan time={data.matches[matchesIndex].gameDuration} win={data.matches[matchesIndex].teams[0].win} >{
            data.matches[matchesIndex].gameDuration < 180 ? "다시하기" : (data.matches[matchesIndex].teams[0].win ? "승리" : "패배")
          }</dmb.WinBlueLabelSpan>
          <dmb.Font1Span>블루팀</dmb.Font1Span>
        </dmb.MatchLabelSpan>
        <dmb.MatchLabelSpan>
          <dmb.svgImg>
            <dmb.svgPath d={towerPath} win={data.matches[matchesIndex].teams[0].win} />
          </dmb.svgImg>
          <dmb.Font1Span>{data.matches[matchesIndex].teams[0].objectives.tower.kills}</dmb.Font1Span>
          <dmb.svgImg>
            <dmb.svgPath d={dragonPath} win={data.matches[matchesIndex].teams[0].win} />
          </dmb.svgImg>
          <dmb.Font1Span>{data.matches[matchesIndex].teams[0].objectives.dragon.kills}</dmb.Font1Span>
          <dmb.svgImg>
            <dmb.svgPath d={BaronPath} win={data.matches[matchesIndex].teams[0].win} />
          </dmb.svgImg>
          <dmb.Font1Span>{data.matches[matchesIndex].teams[0].objectives.baron.kills}</dmb.Font1Span>
        </dmb.MatchLabelSpan>
        <dmb.MatchLabelSpan>
          <dmb.GoldImg src={`${process.env.PUBLIC_URL}` + `assets/images/yellow-coin-icon-original.svg`} />
          <dmb.Font1Span>{(() => {
            let goldBlue = 0;

            [0, 1, 2, 3, 4].forEach((num) => {
              goldBlue += Number(data.matches[matchesIndex].participants[num].goldEarned);
            });
            const formattedGold = Math.floor(goldBlue / 100) / 10;
            return formattedGold + "K";
          })()}</dmb.Font1Span>
        </dmb.MatchLabelSpan>
        <dmb.MatchLabelB>{data.matches[matchesIndex].teams[0].objectives.champion.kills}</dmb.MatchLabelB>
        <b>VS</b>
        <dmb.MatchLabelB>{data.matches[matchesIndex].teams[1].objectives.champion.kills}</dmb.MatchLabelB>
        <dmb.MatchLabelSpan>
          <dmb.GoldImg src={`${process.env.PUBLIC_URL}` + `assets/images/yellow-coin-icon-original.svg`} />
          <dmb.Font1Span>{(() => {
            let goldRed = 0;

            [5, 6, 7, 8, 9].forEach((num) => {
              goldRed += Number(data.matches[matchesIndex].participants[num].goldEarned);
            });
            const formattedGold = Math.floor(goldRed / 100) / 10;
            return formattedGold + "K";
          })()}</dmb.Font1Span>
        </dmb.MatchLabelSpan>
        <dmb.MatchLabelSpan>
          <dmb.svgImg>
            <dmb.svgPath d={towerPath} win={data.matches[matchesIndex].teams[1].win} />
          </dmb.svgImg>
          <dmb.Font1Span>{data.matches[matchesIndex].teams[1].objectives.tower.kills}</dmb.Font1Span>
          <dmb.svgImg>
            <dmb.svgPath d={dragonPath} win={data.matches[matchesIndex].teams[1].win} />
          </dmb.svgImg>
          <dmb.Font1Span>{data.matches[matchesIndex].teams[1].objectives.dragon.kills}</dmb.Font1Span>
          <dmb.svgImg>
            <dmb.svgPath d={BaronPath} win={data.matches[matchesIndex].teams[1].win} />
          </dmb.svgImg>
          <dmb.Font1Span>{data.matches[matchesIndex].teams[1].objectives.baron.kills}</dmb.Font1Span>
        </dmb.MatchLabelSpan>
        <dmb.MatchLabelSpan>
          <dmb.Font1Span>레드팀</dmb.Font1Span>
          <dmb.WinRedLabelSpan time={data.matches[matchesIndex].gameDuration} win={data.matches[matchesIndex].teams[1].win} >{
            data.matches[matchesIndex].gameDuration < 180 ? "다시하기" : (data.matches[matchesIndex].teams[1].win ? "승리" : "패배")
          }</dmb.WinRedLabelSpan>
        </dmb.MatchLabelSpan>
      </dmb.MatchLabel>}
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
    <dmb.MatchDetailTable>
      <colgroup>
        <col width={"30%"} />
        <col width={"12%"} />
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"8%"} />
        <col width={"30%"} />
      </colgroup>
      <dmb.MatchDetailTableLabel>
        <th>블루팀</th>
        <th>딜량</th>
        <th>KDA</th>
        <th>CS</th>
        <th>와드</th>
        <th>아이템</th>
      </dmb.MatchDetailTableLabel>
      {
        [0, 1, 2, 3, 4].map((num) => {
          return (data && <dmb.TableTr $backgroundColor={'#2f436e'} key={num}>
            <dmb.TableTd>
              <dmb.IconDiv>
                <dmb.ChampIconSpan>
                  <dmb.ChampImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                  <dmb.LevelDiv>{data.matches[matchesIndex].participants[num].champLevel}</dmb.LevelDiv>
                </dmb.ChampIconSpan>
                <span>
                  {spellInfo && <div>
                    <dmb.Spell1Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner1Id))} />
                    <dmb.Spell2Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner2Id))} />
                  </div>}
                  {runeInfo && <div>
                    <dmb.Perk1Img src={fd.GetMainRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[0].style, data.matches[matchesIndex].participants[num].perks.styles[0].selections[0].perk)} />
                    <dmb.Perk2Img src={fd.GetSubRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[1].style)} />
                  </div>}
                </span>
              </dmb.IconDiv>
              <dmb.NickTierDiv>
                <dmb.PartiName>{
                  data.matches[matchesIndex].participants[num].summonerName === ""
                    ? data.matches[matchesIndex].participants[num].riotIdGameName
                    : data.matches[matchesIndex].participants[num].summonerName
                }</dmb.PartiName>
                <dmb.Font3Div>{props.tierList[num]}</dmb.Font3Div>
              </dmb.NickTierDiv>
            </dmb.TableTd>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalDamageDealtToChampions}</div>
              <div>
                <dmb.DamageGraphDiv>
                  <dmb.RedBarDiv style={{ width: `${data.matches[matchesIndex].participants[num].totalDamageDealtToChampions / fd.GetMostDamage(data, matchesIndex) * 60}px` }} />
                </dmb.DamageGraphDiv>
              </div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].kills}/{data.matches[matchesIndex].participants[num].deaths}/{data.matches[matchesIndex].participants[num].assists}</div>
              <dmb.Font3Div>{`(${data.matches[matchesIndex].participants[num].deaths === 0
                ? "Perfect"
                : ((data.matches[matchesIndex].participants[num].kills + data.matches[matchesIndex].participants[num].assists) / data.matches[matchesIndex].participants[num].deaths).toFixed(2)
                })`}</dmb.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled}</div>
              <dmb.Font3Div>{`(${((data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled) / data.matches[matchesIndex].gameDuration * 60).toFixed(1)})`}</dmb.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].wardsPlaced}</div>
              <dmb.Font3Div>{`(${data.matches[matchesIndex].participants[num].wardsPlaced - data.matches[matchesIndex].participants[num].detectorWardsPlaced}/${data.matches[matchesIndex].participants[num].detectorWardsPlaced})`}</dmb.Font3Div>
            </td>
            <td>
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item0)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item1)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item2)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item3)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item4)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item5)} />
              <dmb.WardImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item6)} />
            </td>
          </dmb.TableTr>);
        })
      }
    </dmb.MatchDetailTable>
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
    <dmb.MatchDetailTable>
      <colgroup>
        <col width={"30%"} />
        <col width={"12%"} />
        <col width={"10%"} />
        <col width={"10%"} />
        <col width={"8%"} />
        <col width={"30%"} />
      </colgroup>
      <dmb.MatchDetailTableLabel>
        <th>레드팀</th>
        <th>딜량</th>
        <th>KDA</th>
        <th>CS</th>
        <th>와드</th>
        <th>아이템</th>
      </dmb.MatchDetailTableLabel>
      {
        [5, 6, 7, 8, 9].map((num) => {
          return (data && <dmb.TableTr $backgroundColor={'#703c47'} key={num}>
            <dmb.TableTd>
              <dmb.IconDiv>
                <dmb.ChampIconSpan>
                  <dmb.ChampImg src={fd.GetChampImg(data.matches[matchesIndex].participants[num].championName)} />
                  <dmb.LevelDiv>{data.matches[matchesIndex].participants[num].champLevel}</dmb.LevelDiv>
                </dmb.ChampIconSpan>
                <span>
                  {spellInfo && <div>
                    <dmb.Spell1Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner1Id))} />
                    <dmb.Spell2Img src={fd.GetSpellImg(spellInfo, JSON.stringify(data.matches[matchesIndex].participants[num].summoner2Id))} />
                  </div>}
                  {runeInfo && <div>
                    <dmb.Perk1Img src={fd.GetMainRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[0].style, data.matches[matchesIndex].participants[num].perks.styles[0].selections[0].perk)} />
                    <dmb.Perk2Img src={fd.GetSubRuneImg(runeInfo, data.matches[matchesIndex].participants[num].perks.styles[1].style)} />
                  </div>}
                </span>
              </dmb.IconDiv>
              <dmb.NickTierDiv>
                <dmb.PartiName>{
                      data.matches[matchesIndex].participants[num].summonerName === ""
                        ? data.matches[matchesIndex].participants[num].riotIdGameName
                        : data.matches[matchesIndex].participants[num].summonerName
                    }</dmb.PartiName>
                <dmb.Font3Div>{props.tierList[num]}</dmb.Font3Div>
              </dmb.NickTierDiv>
            </dmb.TableTd>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalDamageDealtToChampions}</div>
              <div>
                <dmb.DamageGraphDiv>
                  <dmb.RedBarDiv style={{ width: `${data.matches[matchesIndex].participants[num].totalDamageDealtToChampions / fd.GetMostDamage(data, matchesIndex) * 60}px` }} />
                </dmb.DamageGraphDiv>
              </div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].kills}/{data.matches[matchesIndex].participants[num].deaths}/{data.matches[matchesIndex].participants[num].assists}</div>
              <dmb.Font3Div>{`(${data.matches[matchesIndex].participants[num].deaths === 0
                ? "Perfect"
                : ((data.matches[matchesIndex].participants[num].kills + data.matches[matchesIndex].participants[num].assists) / data.matches[matchesIndex].participants[num].deaths).toFixed(2)
                })`}</dmb.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled}</div>
              <dmb.Font3Div>{`(${((data.matches[matchesIndex].participants[num].totalMinionsKilled + data.matches[matchesIndex].participants[num].neutralMinionsKilled) / data.matches[matchesIndex].gameDuration * 60).toFixed(1)})`}</dmb.Font3Div>
            </td>
            <td>
              <div>{data.matches[matchesIndex].participants[num].wardsPlaced}</div>
              <dmb.Font3Div>{`(${data.matches[matchesIndex].participants[num].wardsPlaced - data.matches[matchesIndex].participants[num].detectorWardsPlaced}/${data.matches[matchesIndex].participants[num].detectorWardsPlaced})`}</dmb.Font3Div>
            </td>
            <td>
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item0)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item1)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item2)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item3)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item4)} />
              <dmb.ItemImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item5)} />
              <dmb.WardImg src={fd.GetItemImg(data.matches[matchesIndex].participants[num].item6)} />
            </td>
          </dmb.TableTr>);
        })
      }
    </dmb.MatchDetailTable>
  );
}

export default DetailMatchBox;