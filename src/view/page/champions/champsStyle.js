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
  align-items: stretch;
`;

export const WrappingBox = styled(FlexBox)`
  width: auto;
  height: 100%;
  padding-left: 15px;
  justify-content: space-evenly;
`;

export const SelectButtonStyle = styled.div`
  width: 150px;
  height: 30px;
  margin-right: 10px;
  border-radius: 4px;
  border-color: #fff;
  font-size: 16px;
  display: flex;
  position: relative;
  background-color: white;
  align-items: center;
  padding-left: 15px;
  box-sizing: border-box;
`;

export const LineButtonBox = styled(FlexBox)`
  width: 500px;
  margin-right: 15px;
  border-radius: 4px;
`;

export const LineButtonStyle = styled.button`
  width: 20%;
  height: 100%;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #fff;
  border-top-left-radius: ${(props) => props.$line === "top" ? "4px;" : "0px;"}
  border-bottom-left-radius: ${(props) => props.$line === "top" ? "4px;" : "0px;"}
  border-top-right-radius: ${(props) => props.$line === "sup" ? "4px;" : "0px;"}
  border-bottom-right-radius: ${(props) => props.$line === "sup" ? "4px;" : "0px;"}
  background-color: ${(props) => props.$path === props.$line ? " rgb(120, 120, 120);" : "white;"}
  color: ${(props) => props.$path === props.$line ? "white;" : "black;"}
  &:hover {
    background-color: rgb(200, 200, 200);
    color: #fff;
  }
`;
  // background-color: rgb(240, 240, 240);
export const ArticleBox = styled.div`
  width: ${(props) => props.$width};
  height: auto;
  box-sizing: border-box;
  margin: ${(props) => props.$seq === "1" ? "10px 10px" : "10px 10px 10px 0px"};
  background-color: ${(props) => props.$seq === "1" ? "white" : "transparent"};
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
  background-color: transparent;
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
  background-color: transparent;
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
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
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
  height: auto;
  border-radius: 4px;
  font-size: 12px;
`;

export const RankingDataWrapBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const RankingPageImgStyle = styled.img`
  width: 24px;
  height: 24px;
`;

export const RankingChampionImgStyle = styled(RankingPageImgStyle)`
  border-radius: 4px;
  margin-right: 5px;
`;

export const RankingChampionLink = styled(LinkStyle)`
  width:  ${(props) => props.$size};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CounterImgStyle = styled(RankingPageImgStyle)`
  border-radius: 50%;
`;

export const RankingChampionNameBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RankingTitle = styled.div`
  width: ${(props) => props.$width};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 220, 220);
  color: rgb(100, 100, 100);
  font-size: 12px;
  border-top-left-radius: ${(props) => props.$seq === 'start' ? "4px" : "0px"};
  border-top-right-radius: ${(props) => props.$seq === 'end' ? "4px" : "0px"};
  border-bottom: 1px solid grey;
`;

export const RankingDataBox = styled.div`
  width: ${(props) => props.$width};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: rgb(100, 100, 100);
  font-size: 16px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
`;

export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-bottom: 8px solid transparent;
  border-top: 8px solid black;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const TierImgBox = styled.div`
  width: 24px;
  height: 24px;
  border: none;
  margin: 0px 10px;
`;

export const OptionListTierImg = styled.img`
  width: ${(props) => props.$sizes};
  height: ${(props) => props.$sizes};
  border: none;
`;

export const OptionListBox = styled.div`
  width: 150px;
  height: auto;
  position: absolute;
  top: 32px;
  left: 0px;
  border-radius: 4px;
  background-color: white;
  display: ${(props) => props.$state === "open" ? "block" : "none"};
`;

export const OptionButtonStyle = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  border-bottom: 0.5px solid grey;
  border-radius: 4px;
  background-color: transparent;
  display: flex;
  align-items: center;
`;