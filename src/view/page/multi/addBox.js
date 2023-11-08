import { ContainerDiv, TierImg, NicknameDiv, TierTextDiv, WinRateGraphDiv, LossRateGraphDiv, WLRDiv} from 'view/page/multi/multiStyle/resultBoxStyle';
import GetMultiData from 'view/page/multi/getMultiData';
import AddMatchBox from 'view/page/multi/addMatchBox';
import { useState, useEffect } from 'react';

function AddBox(props) {
    const [data, setData]=useState([]);
    GetMultiData(props.nickname);
 

    return (
    <ContainerDiv>
        {/* 티어이미지 */}
        <TierImg/>
        {/* 닉네임 가공된걸로 교체 */}
        <NicknameDiv>{props.nickname}</NicknameDiv>
        <TierTextDiv>GRANDMASTER I (839 LP)</TierTextDiv>
        <WLRDiv>
            <WinRateGraphDiv>267
                <div />
                {/* width = 패/(승+패)*130-7 px */}
                <LossRateGraphDiv style={{width: "50px"}}>233</LossRateGraphDiv>
            </WinRateGraphDiv>
            <div>53%</div>
        </WLRDiv>
        {
            AddMatchBox()
        }
        {
            // GetMultiData()
        }
    </ContainerDiv>);
}

export default AddBox;