import { UserDiv, FirstDiv, PlayerIconImg, NicknameSpan, SecondDiv, TierDiv, NowTierDiv, TierNameDiv, TierImg, TierListUl, NowTierLi, LabelDiv, OptionItemLi, MoreListUl, GraphBox, MoreImg } from "view/page/search/searchStyle/topBoxStyle.js";

//버튼전까지의 UI구성
function TopBox() {
  return (
    <div>
      <UserDiv>
        <FirstDiv>
          <NicknameSpan>Hide on bush</NicknameSpan>
          <PlayerIconImg />
        </FirstDiv>
        <SecondDiv>
          <TierDiv>
            <NowTierDiv>
              <TierImg />
              {/* <TierTextDiv>
                <TierNameDiv />
                <TierPointDiv />
                <WinRateDiv />
              </TierTextDiv> */}
              <div>
                <TierNameDiv>TierNameDiv</TierNameDiv>
                <div>TierPointDiv</div>
                <div>WinRateDiv</div>
              </div>
            </NowTierDiv>
            <TierListUl>
              <NowTierLi>
                <b>S22 </b>
                <span>Gold 1</span>
              </NowTierLi>
              {/* <MoreTierLi> */}<li>
                {/* <SelectionDiv> */}<div>
                  <LabelDiv>
                    <b>More</b>
                    <MoreImg />
                  </LabelDiv>
                  <MoreListUl>
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

export default TopBox;