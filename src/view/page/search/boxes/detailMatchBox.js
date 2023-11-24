import * as dmb from "view/page/search/searchStyle/detailMatchBoxStyle";
import * as fd from "view/page/search/filterData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { runeUrl, spellUrl } from "model/constantly/apiConstants";

function DetailMatchBox() {
  return (
    <div>
      <MatchLabel />
      <MatchDetailBlueTableBox color={'blue'} />
      <MatchDetailRedTableBox color={'red'} />
    </div>
  );
}

function MatchLabel() {
  const { data, loading, error } = useSelector((state) => state.data);
  const matchesIndex = 0;
  let goldBlue = 0;
  const towerPath = "M13.635 2.5V4.58333H11.1825V2.5H8.81752V4.58333H6.36496V2.5H4V8.75L5.83942 9.25V14.9167L4 15.4167V17.5H16V15.4167L14.073 14.9167V9.25L16 8.75V2.5H13.635ZM11.1825 13.9167H8.81752V10L9.9562 9.16667L11.0949 10V13.9167H11.1825Z";
  const dragonPath = "M17.8697 7.08361L15.5522 7.42609C15.4132 7.42609 15.3205 7.38328 15.3205 7.25485L15.1351 3.61605C15.1351 3.48763 15.0424 3.48763 14.9497 3.57324L12.0297 6.27023C11.937 6.35585 11.8443 6.31304 11.7979 6.22742L10.1294 2.28896C10.083 2.16054 10.0367 2.07492 10.0367 2.03211C10.0367 1.9893 10.0367 1.9893 10.0367 2.03211C10.0367 2.03211 9.99032 2.16054 9.94398 2.28896L8.2754 6.22742C8.22905 6.35585 8.13635 6.35585 8.04366 6.27023L5.03096 3.57324C4.93826 3.48763 4.84556 3.53043 4.84556 3.65886L4.66016 7.29766C4.66016 7.42609 4.56746 7.51171 4.42842 7.4689L2.11095 7.12642C1.97191 7.12642 1.97191 7.16923 2.06461 7.25485L4.52111 9.39532C4.61381 9.48094 4.70651 9.65217 4.70651 9.73779L5.12365 12.6916C5.17 13.1625 5.4481 13.5906 5.86524 13.8475C6.60683 14.3612 9.38778 17.8288 9.38778 17.8288C9.48048 17.9144 9.61953 18 9.75858 18C9.89763 18 9.99032 18 9.99032 18C9.99032 18 10.1294 18 10.2221 18C10.3148 18 10.5002 17.9144 10.5929 17.8288C10.5929 17.8288 13.3275 14.3184 14.1154 13.8475C14.5325 13.5906 14.8106 13.1625 14.857 12.6916L15.2741 9.73779C15.2741 9.60936 15.3668 9.43813 15.4595 9.39532L17.916 7.25485C18.0551 7.12642 18.0087 7.08361 17.8697 7.08361ZM8.59985 12.4348C6.74588 11.5786 6.28239 9.43813 6.28239 9.43813L9.06334 11.5786C9.06334 11.5786 9.52683 12.4348 8.59985 12.4348ZM11.3808 12.4348C10.4538 12.4348 10.9173 11.5786 10.9173 11.5786L13.6983 9.43813C13.6983 9.43813 13.2348 11.5786 11.3808 12.4348Z";
  const BaronPath = "M15.0357 8.73753L17 6.16463C17 6.16463 15.5848 4.08573 15.5543 4.01711C15.5543 4.01711 15.5542 4.01711 15.5481 4.01025L12.1625 1.99996C12.1564 1.99996 12.1442 2.00682 12.1503 2.01368C12.1503 2.01368 14.139 4.86789 14.139 4.87475C14.139 4.87475 14.139 6.14404 14.139 6.15091L12.3028 7.02912L10.0091 4.89533L7.70937 7.02912L5.861 6.15777C5.861 6.15091 5.861 4.88161 5.861 4.88161L7.84967 2.02055C7.85577 2.01368 7.84968 1.99996 7.83748 2.00682L4.45185 4.01711C4.45185 4.01711 4.45185 4.01711 4.44575 4.02398C4.41525 4.09259 3 6.17149 3 6.17149L4.96427 8.74439C4.96427 8.74439 4.57995 9.80099 4.44575 10.0823L3.00609 11.4476L6.44662 16.9091L8.61829 18L6.77603 14.6655L7.64226 14.8096L8.6427 15.9554V15.1663L9.04531 15.2075L9.99695 16.4356C9.99695 16.4356 10.9425 15.2075 10.9486 15.2075L11.3512 15.1663V15.9554L12.3516 14.8096L13.2179 14.6655L11.3756 18L13.5473 16.9091L16.9878 11.4476L15.5481 10.0823C15.4261 9.79413 15.0357 8.73753 15.0357 8.73753ZM7.45316 12.2641C6.98954 12.2641 6.61743 11.8387 6.61743 11.3241C6.61743 10.8027 6.98954 10.3842 7.45316 10.3842C7.91678 10.3842 8.28889 10.8027 8.28889 11.3241C8.28889 11.8456 7.91678 12.2641 7.45316 12.2641ZM10.0091 13.7667C9.55163 13.7598 9.18562 13.3413 9.18562 12.8267C9.18562 12.3121 9.55163 11.8936 10.0091 11.8868C10.4667 11.8936 10.8327 12.3121 10.8327 12.8267C10.8327 13.3482 10.4606 13.7598 10.0091 13.7667ZM10.0091 10.3293C9.46623 10.3293 9.02702 9.8353 9.02702 9.22466C9.02702 8.61403 9.46623 8.12003 10.0091 8.12003C10.5521 8.12003 10.9913 8.61403 10.9913 9.22466C10.9852 9.8353 10.546 10.3293 10.0091 10.3293ZM12.559 12.2641C12.0954 12.2641 11.7233 11.8456 11.7233 11.3241C11.7233 10.8027 12.0954 10.3842 12.559 10.3842C13.0227 10.3842 13.3948 10.8027 13.3948 11.3241C13.3948 11.8387 13.0227 12.2641 12.559 12.2641Z";

  return (
    <div>
      {data && <dmb.MatchLabel>
        <dmb.MatchLabelSpan>
          <dmb.WinBlueLabelSpan win={data.matches[matchesIndex].teams[0].win} >{
            data.matches[matchesIndex].teams[0].win ? "승리" : "패배"
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
            let goldRed = 0;

            [0, 1, 2, 3, 4].forEach((num) => {
              goldRed += Number(data.matches[matchesIndex].participants[num].goldEarned);
            });
            const formattedGold = Math.floor(goldRed / 100) / 10;
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
          <dmb.WinRedLabelSpan win={data.matches[matchesIndex].teams[1].win} >{
            data.matches[matchesIndex].teams[1].win ? "승리" : "패배"
          }</dmb.WinRedLabelSpan>
        </dmb.MatchLabelSpan>
      </dmb.MatchLabel>}
    </div>
  );
}

function MatchDetailBlueTableBox(props) {
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
                <div>{data.matches[matchesIndex].participants[num].summonerName}</div>
                <dmb.Font3Div>Fetch 필요</dmb.Font3Div>
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
              <dmb.Font3Div>{`(${data.matches[matchesIndex].participants[num].wardsPlaced - data.matches[matchesIndex].participants[num].visionWardsBoughtInGame}/${data.matches[matchesIndex].participants[num].visionWardsBoughtInGame})`}</dmb.Font3Div>
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

function MatchDetailRedTableBox() {
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
                <div>{data.matches[matchesIndex].participants[num].summonerName}</div>
                <dmb.Font3Div>Fetch 필요</dmb.Font3Div>
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
              <dmb.Font3Div>{`(${data.matches[matchesIndex].participants[num].wardsPlaced - data.matches[matchesIndex].participants[num].visionWardsBoughtInGame}/${data.matches[matchesIndex].participants[num].visionWardsBoughtInGame})`}</dmb.Font3Div>
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