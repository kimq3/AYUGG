import { ContainerDiv, TierImg, NicknameDiv, TierTextDiv, WinRateGraphDiv, LossRateGraphDiv, WLRDiv} from './multiStyle/resultBoxStyle';
import AddMatchBox from './addMatchBox';
import { tierImgMapping } from 'model/constantly/apiConstants';

// input: nickname 1개 output: 결과창 1개
// 한사람의 multisearch의 결괄 나타낸다 
function AddBox(props) {
  return (
    <ContainerDiv>
      <TierImg tier={props.data.tier} src={`${process.env.PUBLIC_URL}` + tierImgMapping.get(props.data.tier)} />
      <NicknameDiv>{props.data.nickname}</NicknameDiv>
      <TierTextDiv>{props.data.tierString}</TierTextDiv>
      <WLRDiv>
        <WinRateGraphDiv>{props.data.wins}
          <div />
          {/* width = 패/(승+패)*130-7 px */}
          <LossRateGraphDiv data={(props.data.losses / (props.data.losses + props.data.wins) * 130 - 7)}>{props.data.losses}</LossRateGraphDiv>
        </WinRateGraphDiv>
        <div>{Math.round(props.data.wins / (props.data.losses + props.data.wins) * 100)}%</div>
      </WLRDiv>
      <AddMatchBox value={props.data.matches} />
    </ContainerDiv>
  );
}

export default AddBox;