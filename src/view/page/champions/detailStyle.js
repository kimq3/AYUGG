import styled from "styled-components";
import test from 'assets/images/reset-icon.svg';

export const OutBox = styled.div`
  width: 900px;
  height: ${(props) => props.height};
  margin: 30px auto;
  padding: 5px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

export const BasicInfo = styled.div`
  padding: 10px;
  margin: 0px 4px;
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const CounterBox = styled.div`
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  margin: 0px 4px;
  display: flex;
  justify-content: space-between;
  align-content : space-around;
`;

export const Counter = styled.div`
  padding: 10px;
  width: 49.5%;
  height: 100%;
  color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${(props) => props.backColor};
  text-align: center;
`;

export const CounterOlStyle = styled.ol`
  width: 100%;
  height: 75%;
  padding-left: 0px;
  box-sizing : border-box;
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

export const CounterImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: block;
  margin: 7px auto;
`;

CounterImg.defaultProps = {
  src: test,
};

export const CounterInfo = styled.div`
  margin: ${(props) => props.margin}
  font-size:  12px;
  font-weight: 700;
`;
