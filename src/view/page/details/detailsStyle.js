import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  border-radius: 4px;
`;

const Border4px = styled.img`
  border-radius: 4px;
`;

// 틀
export const OutBoxStyle = styled(FlexBox)`
  width: 900px;
  height: ${(props) => props.$height};
  margin: 30px auto;
  padding: 5px;
  background-color: rgb(90, 90, 90);
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: space-around;
`;

// 첫 번째 박스
// - Basic 박스
export const BasicInfoStyle = styled(FlexBox)`
  padding: 0px 10px;
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

export const BasicDivStyle = styled.div`
  width: ${(props) => props.$width};
  height: 100px;
  display: ${(props) => (props.$display ? props.$display : "flex")};
  box-sizing: border-box;
  align-items: center;
  margin: ${(props) => props.$margin};
`;

// - > 대표 Img
export const BasicImgStyle = styled(Border4px)`
  width: 100%;
  height: 100%;
`;

// - > 이름, 스킬
export const NameSkillStyle = styled(FlexBox)`
  width: 100%;
  height: 50%;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const SkillImgStyle = styled(Border4px)`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

// - > Rate
export const RateBoxStyle = styled.div`
  width: auto;
  height: 100%;
  margin-right: 10px;
`;

export const RateStyle = styled.div`
  width: auto;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  font-weight: ${(props) => props.$weight};
`;

// - Counter 박스
export const CounterBoxStyle = styled(FlexBox)`
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  margin: 0px 10px;
  justify-content: space-between;
  align-content: space-around;
`;

export const CounterStyle = styled.div`
  padding: 10px;
  width: 49.5%;
  height: 100%;
  color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${(props) => props.$back};
  text-align: center;
`;

export const CounterOlStyle = styled.ol`
  width: 100%;
  height: 75%;
  padding-left: 0px;
  box-sizing: border-box;
  margin: 9px 0px;
`;

export const CounterLiStyle = styled.li`
  display: flex;
  justify-content: space-evenly;
`;

export const CounterDivStyle = styled.div`
  width: 70px;
  height: 90px;
  color: #fff;
  overflow: hidden;
  text-align: center;
`;

export const CounterImgStyle = styled(Border4px)`
  width: 36px;
  height: 36px;
  display: block;
  margin: 7px auto;
`;

export const CounterInfoStyle = styled.div`
  margin: ${(props) => props.$margin};
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
`;

// 두번째 박스
//  - 룬
const RuneBox = styled.div`
  background-color: rgb(200, 200, 200);
  border-radius: 4px;
`;

export const RuneWrappingBox = styled.div`
  width: ${(props) => props.$width};
  height: 99%;
  background-color: rgb(47, 47, 47);  
  border-radius: 4px;
  box-sizing: border-box;
`;

export const RuneArticleBox = styled(RuneBox)`
  width: 100%;
  height: ${(props) => props.$height};
  margin-bottom: ${(props) => (props.$last ? "0px" : "7px")};
`;

// - > Nav 룬
export const SubTitleBox = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

export const NavRuneStyle = styled(RuneBox)`
  border-left: ${(props) => (props.$selected === "true" ? "2px solid red" : "none")};
  border-radius: 0px;
  width: 20%;
  height: 50%;
  background-color: ${(props) => (props.$selected === "true" ? "none" : "rgb(90, 90, 90)")};
  box-sizing: border-box;
  ${(props) => {
    if (props.$position === "first") {
      return "border-top-left-radius: 4px;";
    } else {
      return "border-bottom-left-radius: 4px";
    }
  }}
`;

export const RuneTypeStyle = styled(FlexBox)`
  width: 100%;
  background-color: #fff;
`;

const RuneImg = styled.img`
  border: 50%;
  border: 1px solid #fff;
`;

export const NavRuneImgStyle = styled(RuneImg)`

`;