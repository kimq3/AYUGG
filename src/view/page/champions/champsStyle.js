import { Link } from "react-router-dom";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

export const ChampionsBox = styled(FlexBox)`
  width: 1000px;
  height: ${(props) => props.$height};
  margin: 50px auto;
  background-color: rgb(160, 160, 160);
  justify-content: space-between;
  border-radius: 4px;
`;

export const WrappingBox = styled(FlexBox)`
  width: auto;
  hight: 100%;
  padding-left: 15px;
  justify-content: space-evenly;
`;

export const ChampionsSelect = styled.select`
  width: auto;
  height: 30px;
  margin-right: 10px;
  border-radius: 4px;
  border-color: #fff;
  font-size: 16px;
`;

export const LineButton = styled(FlexBox)`
  width: 90px;
  height: 30px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-right: 15px;
  font-size: 16px;
  background-color: ${(props) => props.pathname === props.line ? "rgb(66, 66, 253)" : "#fff"}
  color: ${(props) => props.pathname === props.line ? "#fff" : "black"}
  &:hover {
    background-color: rgb(66, 66, 253);
    color: #fff;
  }
`;

export const ArticleBox = styled.div`
  width: ${(props) => props.$width};
  height: auto;
  box-sizing: border-box;
  margin: ${(props) => props.$seq === "1" ? " 10px 10px" : "10px 10px 10px 0px"};
  background-color: rgb(240, 240, 240);
  border-radius: 4px;
`;

export const ChampionsInputBox = styled(FlexBox)`
  width: auto;
  height: 50px;
  border: 1px solid grey;
  margin: 10px 10px;
  justify-content: normal;
`;

export const ChampionsInput = styled.input`
  width: 85%;
  height: 30px;
  font-size: 18px;
  border: none;
  margin: 15px 5px;
  padding: 0 5px;
  background-color: rgb(240, 240, 240);
  &:active {
    border: none;
  }
  &:focus {
    outline: none;
  }
`;

export const ResetButton = styled.button`
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const ChampionsOlStyle = styled.ol`
  width: auto;
  box-sizing: border-box;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin-block-start: 0px;
  margin-left: 20px;
  padding-left: 0px;
`;

export const ListBox = styled(FlexBox)`
  width: 54px;
  height: 72px;
  display: inline-flex;
  margin: 5px 10px;
`;

export const ChampionLink = styled(LinkStyle)`

`;

export const ChampionsImgStyle = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ChampionsSpanStyle = styled.div`
  width: 54px;
  font-size: 12px;
  box-sizing: border-box;
  padding-left: 5px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RankingTitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 2794px;
  border-radius: 4px;
`;
// height: 2794px;

export const RankingTitle = styled.div`
  width: ${(props) => props.$width};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 220, 220);
  color: rgb(100, 100, 100);
  font-size: 16px;
  border-top-left-radius: ${(props) => props.$seq === 'start' ? "4px" : "0px"};
  border-top-right-radius: ${(props) => props.$seq === 'end' ? "4px" : "0px"};
  border-bottom: 1px solid grey;
`;

export const RankingWrapperBox = styled.div`
  width: 100%;
  height: 80%;
  background-color: grey;
`;