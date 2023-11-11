import { useEffect } from "react";
import { useState } from "react";
import {
  CounterImg,
  CounterInfo,
  CounterOlStyle,
  CounterDivStyle,
  CounterLiStyle,
} from "./detailStyle";

function Api() {
  const [info, setInfo] = useState([]);

  async function fetchData() {
    await fetch("http://localhost:8100/garen")
    .then((response) => response.json())
    .then((data) => {
      setInfo(data.data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(info);
}

function CounterDiv(props) {
  return (
    <>
      <CounterDivStyle>
        <CounterImg></CounterImg>
        <CounterInfo margin="5px 0px;">가렌{props.name}</CounterInfo>
        <CounterInfo margin="0;">{props.rate}</CounterInfo>
      </CounterDivStyle>
    </>
  );
}

export function CounterLiTag() {
  // CounterDiv props로 api를 이용하여 이름 이랑 승률 넣기
  return (
    <>
      <CounterLiStyle>
        <CounterDiv name="가렌" rate="10%"></CounterDiv>
        <CounterDiv></CounterDiv>
        <CounterDiv></CounterDiv>
        <CounterDiv></CounterDiv>
      </CounterLiStyle>
    </>
  );
}

export function CounterOlTag() {
  Api();
  return (
    <>
      <CounterOlStyle>
        <CounterLiTag></CounterLiTag>
      </CounterOlStyle>
    </>
  );
}
