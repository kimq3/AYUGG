import styled from 'styled-components';

export const CoverDetailMatchBox = styled.div`
  display: ${(props) => (props.isvisible === 'true' ? 'initial' : 'none')};
`;

export const MatchLabel = styled.div`
  background: #626367;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 15px;
  height: 40px;
`;
//MatchLabel
export const MatchLabelSpan = styled.span`
  display: flex;
  align-items: center;
`;
export const WinBlueLabelSpan = styled.span`
  font-size: 20px;
  padding-right: 10px;
  color: ${ props => props.time < 180 ? `rgba(0, 0, 0, 0.7)` : (props.win ? `rgba(0, 0, 255, 0.7)` : `rgba(255, 0, 0, 0.7)`)}; 
`;
export const WinRedLabelSpan = styled.span`
  font-size: 20px;
  padding-left: 10px;
  color: ${ props => props.time < 180 ? `rgba(0, 0, 0, 0.7)` : (props.win ? `rgba(0, 0, 255, 0.7)` : `rgba(255, 0, 0, 0.7)`)}; 
`;
export const Font1Span = styled.span`
  font-size: 14px;
`;
export const svgImg = styled.svg`
  width: 20px;
  height: 20px;
  padding: 0px 3px;
`;
export const svgPath = styled.path`
  width: 20px;
  height: 20px;
  fill: ${ props => (props.win ? `rgba(0, 0, 255, 0.5)` : `rgba(255, 0, 0, 0.5)`)}; 
`;
export const GoldImg = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`;
export const MatchLabelB = styled.b`
  font-size: 20px;
`;
//MatchDetailTable
export const MatchDetailTable = styled.table`
  width: 1000px;
  color: white;
  border-collapse: collapse;
  margin-bottom: 10px;
`;
export const MatchDetailTableLabel = styled.tr`
  background: rgb(57, 58, 60);
  border-bottom: 2px solid rgb(98, 99, 103);
`;
export const TableTr = styled.tr`
  background: ${ props => (props.$backgroundColor)};
`;
export const TableTd = styled.td`
  display: flex;
  flex-direction: row;
`;
export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ChampIconSpan = styled.span`
  position: relative;
  display: flex;
  margin: auto 30px;
  margin-left: 50px;
`;
export const ChampImg = styled.img`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
`;
export const LevelDiv = styled.div`
  background: black;
  color: white;
  font-size: 6px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 70%;
  left: 70%;
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
export const NickTierDiv = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const PartiName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 144px;
`;
export const Font3Div = styled.div`
  color: rgb(200, 200, 200);
  font-size: 12px;
`;
export const DamageGraphDiv = styled.div`
  background: #31313c;
  width: 60px;
  height: 9px;
  margin: 0 auto;
  margin-top: 3px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
export const RedBarDiv = styled.div`
  background: #e84057;
  height: 9px;
`;
export const ItemImg = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 5px;
  padding-top: 4px;
`;
export const WardImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding-top: 4px;
`;