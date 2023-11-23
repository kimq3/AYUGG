import { UserDiv, FirstDiv, PlayerIconImg, NicknameSpan, SecondDiv, TierDiv, NowTierDiv, TierNameDiv, TierImg, TierListUl, NowTierLi, LabelDiv, OptionItemLi, MoreListUl, GraphBox, MoreImg } from "view/page/search/searchStyle/topBoxStyle.js";
import { tierImgMapping } from 'model/constantly/apiConstants';
import { useState } from "react";
import LineTierChart from "../charts/lineTier";
import { useSelector } from "react-redux";

//버튼전까지의 UI구성
function TopBox() {
  const { data, loading, error } = useSelector((state) => state.data);
  const [isDropdownVisible, setDropdownVisible] = useState('false');

  const clickDropdown = () => {
    if (isDropdownVisible === 'true') {
      setDropdownVisible('false');
    } else {
      setDropdownVisible('true');
    }
  };

  return (
    <div>
      {data&&<UserDiv>
        <FirstDiv>
          <NicknameSpan>{data.nickname}</NicknameSpan>
          <PlayerIconImg src={GetPlayerIconImg(data.profileIconId)} />
        </FirstDiv>
        <SecondDiv>
          <TierDiv>
            <NowTierDiv>
              <TierImg src={`${process.env.PUBLIC_URL}` + tierImgMapping.get(data.tier)} />
              <div>
                <TierNameDiv>{data.tier} {data.rank}</TierNameDiv>
                <div>{data.leaguePoints} LP</div>
                <div>승률 {Math.round(data.wins / (data.wins + data.losses) * 100)}% {'('}{data.wins}승 {data.losses}{'패)'}</div>
              </div>
            </NowTierDiv>
            <TierListUl>
              <NowTierLi>
                <b>S22  </b>
                <span>{data.tier} {data.rank}</span>
              </NowTierLi>
              {/* <MoreTierLi> */}<li>
                {/* <SelectionDiv> */}<div>
                  <LabelDiv onClick={clickDropdown}>
                    <b>More</b>
                    <MoreImg src={`${process.env.PUBLIC_URL}` + 'assets/images/arrow-down-icon-original.svg'} />
                  </LabelDiv>
                  <MoreListUl isvisible={isDropdownVisible}>
                    <OptionItemLi>
                      <b>S9</b>
                      <span>Gold 1</span>
                    </OptionItemLi>
                    <OptionItemLi>
                      <b>S9</b>
                      <span>Gold 1</span>
                    </OptionItemLi>
                  </MoreListUl>
                </div>
              </li>
            </TierListUl>
          </TierDiv>
          <GraphBox>
            <LineTierChart></LineTierChart>
          </GraphBox>
        </SecondDiv>
      </UserDiv>}
    </div>
  );
}


function GetPlayerIconImg(profileIconId) {
  const version = "https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/"
  const champUrl = version + profileIconId + ".png";
  return champUrl;
}

export default TopBox;