import { UserDiv, FirstDiv, PlayerIconImg, NicknameSpan, SecondDiv, TierDiv, NowTierDiv, TierNameDiv, TierImg, TierListUl, NowTierLi, LabelDiv, OptionItemLi, MoreListUl, GraphBox, MoreImg } from "../searchStyle/topBoxStyle";
import { tierImgMapping } from 'model/constantly/apiConstants';
import { useState } from "react";
import LineTierChart from "../charts/lineTier";
import { useSelector } from "react-redux";
import { GetPlayerIconImg } from "../dataHandling/filterData";
import { ChartCrawlingData, FilterCrawlingData }from "../dataHandling/crawkingDataToList";

//버튼전까지의 UI구성
function TopBox() {
  const { data } = useSelector((state) => state.data);
  const [isDropdownVisible, setDropdownVisible] = useState('false');
  const crawlingData = "S2023 S1 Master\nS2022 Challenger\nS2021 Grandmaster\nS2020 Grandmaster\nS9 Challenger\nS8 Challenger\nS7 Master"; // 실시간 크롤링 불가하여 더미데이터로
  const [tierList, setTierList] = useState([]);

  const clickDropdown = () => {
    if (isDropdownVisible === 'true') {
      setDropdownVisible('false');
    } else {
      setDropdownVisible('true');
      setTierList(FilterCrawlingData(crawlingData));
    }
  };

  return (
    <div>
      {data && <UserDiv>
        <FirstDiv>
          <NicknameSpan>{data.nickname}</NicknameSpan>
          <PlayerIconImg src={GetPlayerIconImg(data.profileIconId)} />
        </FirstDiv>
        <SecondDiv>
          <TierDiv>
            <NowTierDiv>
              <TierImg src={`${process.env.PUBLIC_URL}/` + tierImgMapping.get(data.tier)} />
              <div>
                <TierNameDiv>{data.tier} {data.rank}</TierNameDiv>
                <div>{data.leaguePoints}LP</div>
                <div>승률 {Math.round(data.wins / (data.wins + data.losses) * 100)}% {'('}{data.wins}승 {data.losses}{'패)'}</div>
              </div>
            </NowTierDiv>
            <TierListUl>
              <NowTierLi>
                <b>S23  </b>
                <span>{data.tier} {data.rank}</span>
              </NowTierLi>
              <li>
                <div>
                  <LabelDiv onClick={clickDropdown}>
                    <b style={{paddingLeft: '8px'}}>MORE</b>
                    <MoreImg src={`${process.env.PUBLIC_URL}` + '/assets/images/arrow-down-icon-original.svg'} />
                  </LabelDiv>
                  <MoreListUl isvisible={isDropdownVisible}>
                    {tierList.map(element => {
                      return (<OptionItemLi>
                        <b>{element[0]} </b>
                        <span>{element[1]}</span>
                      </OptionItemLi>);
                    })}
                  </MoreListUl>
                </div>
              </li>
            </TierListUl>
          </TierDiv>
          <GraphBox>
            <LineTierChart data={ChartCrawlingData(FilterCrawlingData(crawlingData))}></LineTierChart>{console.log(ChartCrawlingData(FilterCrawlingData(crawlingData)))}
          </GraphBox>
        </SecondDiv>
      </UserDiv>}
    </div>
  );
}

export default TopBox;