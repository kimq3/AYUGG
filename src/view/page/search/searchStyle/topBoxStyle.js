import styled from 'styled-components';

//searchPage + topBox
export const ContainerDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 1000px;
`;
export const BlankDiv = styled.div`
  height: 21px;
`;

export const UserDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PlayerIconImg = styled.img`
  width: 46px;
  height: 46px
`;
export const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: -16px;
`;
export const NicknameSpan = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-right: 10px;
`;
export const SecondDiv = styled.div`
  display: flex;
  margin-top: 18.6px;
`;
export const TierDiv = styled.div`
  color: #626367;
  font-size: 10px;
  text-align: left;
`;
export const NowTierDiv = styled.div`
  display: flex;
`;
export const TierNameDiv = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const TierImg = styled.img`
  margin-right: 10px;
  width: 46px;
  height: 46px;
  ${props => (
    (props.tier === "EMERALD")
    ? 'transform: scale(1.5);'
    : props.tier === "NONE"
      ? 'transform: scale(1.8); margin-top: -10px;'
      : 'transform: scale(3);'
  )}
`;
export const TierListUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  font-size: 10px;
  color: white;
  padding-inline-start: 0px;
  max-height: 13.6px;
  justify-content: flex-end;
`;
export const NowTierLi = styled.li`
  background: #626367;
  margin-right: 10px;
  border-radius: 4px;
  padding: 0 5px;
`;
export const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 90px;
  justify-content: space-between;
  background: #626367;
  margin-right: 10px;
  margin-bottom: 2px;
  border-radius: 4px;
  padding: 0 5px;
`;
export const MoreListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: ${(props) => (props.isvisible === 'true' ? 'initial' : 'none')};
`;
export const OptionItemLi = styled.li`
  width: 90px;
  display: flex;
  justify-content: space-evenly;
  background: #626367;
  margin-right: 10px;
  border-radius: 4px;
  padding: 0 5px;
  margin-top: 3px;
`;
export const GraphBox = styled.div`
  width: auto;
  height: 100%;
`;
export const MoreImg = styled.img`
  width: 10px;
  height: 10px;
`;