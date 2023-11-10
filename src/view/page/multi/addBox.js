import { ContainerDiv, TierImg, NicknameDiv, TierTextDiv, WinRateGraphDiv, LossRateGraphDiv, WLRDiv} from 'view/page/multi/multiStyle/resultBoxStyle';
import AddMatchBox from 'view/page/multi/addMatchBox';
import { tierImgMapping } from 'model/constantly/apiConstants';

function AddBox(props) {    
    return (
        <ContainerDiv>
            <TierImg src={tierImgMapping.get(props.data.tier)} />
            <NicknameDiv>{props.data.nickname}</NicknameDiv>
            <TierTextDiv>{props.data.tierString}</TierTextDiv>
            <WLRDiv>
                <WinRateGraphDiv>{props.data.wins}
                    <div />
                    {/* width = 패/(승+패)*130-7 px */}
                    <LossRateGraphDiv style={{width: `${props.data.losses / (props.data.losses + props.data.wins) * 130 - 7}`}}>{props.data.losses}</LossRateGraphDiv>
                </WinRateGraphDiv>
                <div>{Math.round(props.data.wins / (props.data.losses + props.data.wins) * 100)}</div>
            </WLRDiv>
            <AddMatchBox value={props.data.matches} />
        </ContainerDiv>
    );
}

export default AddBox;