import styled from "styled-components";
// import test from 'assets/images/reset-icon.svg';

// 틀
export const OutBoxStyle = styled.div`
  width: 900px;
  height: ${(props) => props.height};
  margin: 30px auto;
  padding: 5px;
  border-radius: 4px;
  background-color: rgb(90, 90, 90);
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
`;

// 첫 번째 박스
// - Basic 박스
export const BasicInfoStyle = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BasicDivStyle = styled.div`
  width: ${(props) => props.width};
  height: 100px;
  display: ${(props) => props.display ? props.display : "flex"};
  box-sizing: border-box;
  align-items: center;
  margin: ${(props) => props.margin};
`;

// - > 대표 Img
export const BasicImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

// - > 이름, 스킬
export const NameSkillStyle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const SkillImgStyle = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
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
  font-weight: ${(props) => props.weight};
`;

// - Counter 박스
export const CounterBoxStyle = styled.div`
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  margin: 0px 10px;
  display: flex;
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
  background-color: ${(props) => props.back};
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

export const CounterImgStyle = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: block;
  margin: 7px auto;
`;

// CounterImg.defaultProps = {
//   src: test,
// };

export const CounterInfoStyle = styled.div`
  margin: ${(props) => props.margin}
  font-size:  12px;
  font-weight: 700;
  overflow:hidden;
`;

// 두 번째 박스