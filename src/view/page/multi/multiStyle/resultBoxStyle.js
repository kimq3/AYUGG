import styled from 'styled-components';

export const ContainerDiv = styled.div`
  font-size: 14px;
  width: 180px;
  background: #626367;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 10px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.6);
  border-style: solid;
  margin-right: 10px;
`;
export const TierImg = styled.img`
  height: 30px;
  ${props => (
    (props.tier === "EMERALD")
    ? 'transform: scale(1.5);'
    : props.tier === "NONE"
      ? 'transform: scale(1.8); margin-top: -10px;'
      : 'transform: scale(3);'
  )}
`;
export const NicknameDiv = styled.div`
  padding-bottom: 2px;
  color: orange;
  font-size: 20px;
`;
export const TierTextDiv = styled.div`
  padding-bottom: 2px;
`;
export const WinRateGraphDiv = styled.div`
  background: #5383E8;
  width: 130px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
`;
export const LossRateGraphDiv = styled.div`
  width: ${props => props.data}px;
  background: #E84057;
  height: 20px;
  text-align: right;
  padding-right: 7px;
`;
export const WLRDiv = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MatchDiv = styled.div`
  display: flex;
  margin-bottom: 2px;
`;
export const MatchChampImg = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 22px;
`;
export const KdaDiv = styled.div`
  width: 60px;
  border-radius: 2px;
  text-align: center;
`;
export const TimeDiv = styled.div`
  margin: auto 0 auto auto;
`;