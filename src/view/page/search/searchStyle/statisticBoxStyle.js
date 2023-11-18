import styled from 'styled-components';

export const StatisticTable = styled.table`
  color: white;
  border-collapse: collapse;
  max-height: 200px;
`
export const InfoTh = styled.th`
  text-align: left;
  background: #626367;
  border: 1px solid white;
  padding-left: 20px;
  border-left-width: initial;
  border-left-style: none;
  border-left-color: initial;
`
export const MostTh = styled.th`
  text-align: left;
  background: #626367;
  border: 1px solid white;
  padding-left: 20px;
`
export const PlayStyleTh = styled.th`
  text-align: left;
  background: #626367;
  border: 1px solid white;
  padding-left: 20px;  
  border-right-width: initial;
  border-right-style: none;
  border-right-color: initial;
`
export const InfoContentTh = styled.th`
  text-align: left;
  border: 1px solid white;
  border-left: none;
`
export const MostContentTh = styled.th`
  text-align: left;
  border: 1px solid white;
`
export const PlayStyleContentTh = styled.th`
  text-align: left;
  border: 1px solid white;
  border-right: none;
`
export const InfoCover = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const GraphCover = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`
export const GraphSample = styled.div`
  background: green;
  width: 150px;
  height: 150px;
`
export const InnerTextDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const RightTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  align-items: center;
`
