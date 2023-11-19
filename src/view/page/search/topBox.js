import { UserDiv, FirstDiv, PlayerIconImg, NicknameSpan, SecondDiv, TierDiv, NowTierDiv, TierNameDiv, TierImg, TierListUl, NowTierLi, LabelDiv, OptionItemLi, MoreListUl, GraphBox, MoreImg } from "view/page/search/searchStyle/topBoxStyle.js";
import { tierImgMapping } from 'model/constantly/apiConstants';
import { useState } from "react";

//버튼전까지의 UI구성
function TopBox(props) {
  const [isDropdownVisible, setDropdownVisible] = useState('false');

  const clickDropdown = () => {
    if(isDropdownVisible === 'true'){
      setDropdownVisible('false');
    } else {
      setDropdownVisible('true');
    }
  };
  
  return (
    <div>
      <UserDiv>
        <FirstDiv>
          <NicknameSpan>{props.data.nickname}</NicknameSpan>
          <PlayerIconImg src={GetPlayerIconImg(props.data.profileIconId)} />
        </FirstDiv>
        <SecondDiv>
          <TierDiv>
            <NowTierDiv>
              <TierImg src={`${process.env.PUBLIC_URL}` + tierImgMapping.get(props.data.tier)} />
              <div>
                <TierNameDiv>{props.data.tier} {props.data.rank}</TierNameDiv>
                <div>{props.data.leaguePoints}</div>
                <div>승률 {Math.round(props.data.wins / (props.data.wins + props.data.losses) * 100)}% {'('}{props.data.wins}승 {props.data.losses}{'패)'}</div>
              </div>
            </NowTierDiv>
            <TierListUl>
              <NowTierLi>
                <b>S22  </b>
                <span>{props.data.tier} {props.data.rank}</span>
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
                  {/* </SelectionDiv> */}</div>
                {/* </MoreTierLi> */}</li>
            </TierListUl>
          </TierDiv>
          {/* <GraphDiv> */}<div>
            {/* 시즌별? 시간별? 티어 그래프 */}
            <img style={{ width: "160px", height: "80px" }} />
            {/* </GraphDiv> */}</div>
        </SecondDiv>
      </UserDiv>
    </div>
  );
}


function GetPlayerIconImg(profileIconId) {
  const version = "https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/"
  const champUrl = version + profileIconId + ".png";
  return champUrl;
}

export default TopBox;