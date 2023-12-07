import styled from 'styled-components';

export const MatchDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  height: 104px;
  background-color: ${ props => props.time < 180 ? `rgba(0, 0, 0, 0.3)` : (props.win ? `rgba(0, 0, 255, 0.3)` : `rgba(255, 0, 0, 0.3)`)};
`;
export const MatchFirstDiv = styled.div`
  text-align: center;
`;
export const Font1Div = styled.div`
  color: white;
  font-size: 14px;
`;
export const Font2Div = styled.div`
  color: rgb(200, 200, 200);
  font-size: 10px;
`;
export const MatchSecondDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ChampImg = styled.img`
  width: 45px;
  height: 45px;
  padding-right: 10px;
`;
export const Spell1Img = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 4px;
`;
export const Spell2Img = styled.img`
  width: 20px;
  height: 20px;
`;
export const Perk1Img = styled.img`
  width: 20px;
  height: 20px;
  transform: scale(1.3);
  padding-right: 4px;
`;
export const Perk2Img = styled.img`
  width: 20px;
  height: 20px;
  transform: scale(0.9);
`;
export const KillRateCsDiv = styled.div`
  padding-bottom: 5px;
`;
export const Font2Span1 = styled.span`
  color: rgb(200, 200, 200);
  font-size: 10px;
`;
export const Font2Span2 = styled.span`
  color: rgb(200, 200, 200);
  font-size: 10px;
  padding-left: 10px;
`;
export const ItemImg = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 4px;
`;
export const Item6Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
export const MatchFifthDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 12px;
  text-align: left;
`;
export const PartiListUl = styled.ul`
  padding-left: 20px;
  list-style: none;
`;
export const PartiImg = styled.img`
  width: 12px;
  height: 12px;
  padding-right: 5px;
`;
export const PartiName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80px;
  display: block;
  cursor: pointer;
  &:hover {
    color: #758592;
  }
`;
export const OpenDiv = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  padding: 37px 10px;
  background: rgba(255, 255, 255, 0.5);
`;
export const OpenImg = styled.img`
  width: 30px;
  height: 30px;
`;
