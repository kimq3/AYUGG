import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

// const [info, setInfo] = useState([]);

// useEffect(()=>{
//   fetch("http://localhost:8100/garen")
//   .then((response) => response.json())
//   .then((data) => {
//     setInfo(data);
//   });
// }, [])

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
  display: flex;
  justify-content: space-between;
`;

export const Counter = styled.div`
  padding: 10px;
  width: 45%;
  height: 100%;
  color: ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${(props) => props.backColor};
  text-align: center;
`;

export const CounterImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: block;
  margin: 7px auto;
`;
