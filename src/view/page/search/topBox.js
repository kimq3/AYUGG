import { UserDiv, FirstDiv, PlayerIconImg, NicknameSpan, SecondDiv, NowTierDiv, TierNameDiv, TierImg, TierListUl, NowTierLi, LabelDiv, OptionItemLi, MoreListUl, GraphBox, MoreImg } from "view/page/search/searchStyle/topBoxStyle.js";

function TopBox() {    
    return (
        <div>
            <UserDiv>
                <FirstDiv>
                    <NicknameSpan>Hide on bush</NicknameSpan>
                    <PlayerIconImg src={"assets/images/example.webp"}/>
                </FirstDiv>
                <SecondDiv>
                    {/* <TierDiv> */}<div>
                        <NowTierDiv>
                            <TierImg />
                            {/* <TierTextDiv>
                                <TierNameDiv />
                                <TierPointDiv />
                                <WinRateDiv />
                            </TierTextDiv> */}
                            <div>
                                <div>TierNameDiv</div>
                                <div>TierPointDiv</div>
                                <div>WinRateDiv</div>
                            </div>
                        </NowTierDiv>
                        <TierListUl>
                            <NowTierLi>
                                <b>S22</b>
                                <span id="session22">Gold 1</span>
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
                    {/* </TierDiv> */}</div>
                    {/* <GraphDiv> */}<div>
                        {/* 시즌별? 시간별? 티어 그래프 */}
                        <GraphBox />
                    {/* </GraphDiv> */}</div>
                </SecondDiv>
            </UserDiv>
        </div>
    );
}

export default TopBox;