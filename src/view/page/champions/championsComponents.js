import { useState } from "react";
import { ChampionsSelect, LineButton, ChampionInput, ResetButton } from "./championsStyle";
import { Link, useLocation } from 'react-router-dom';
import { ChampionApi } from "model/constantly/apiConstants";

export function Option() {
  const tierList = ["Challenger", "Grandmaster", "Master", "Diamond", "Emerald", "Platinum", "Gold", "Silver", "Bronze", "Iron"];
  const [tierSelected, setTierSelected] = useState("Emerald");
  const tierChangeHandle = (e) => {
    setTierSelected(e.target.value);
  };

  return <>
    <ChampionsSelect onChange={tierChangeHandle} value={tierSelected}>
      {tierList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </ChampionsSelect>
  </>;
}

export  function Line(props) {
  const { pathname } = useLocation();
  const lineClick = () => {
    <Link to={"/" + props.value}></Link>
  }

  return <LineButton pathname={pathname} line={props.value} onClick={lineClick}>
    {props.name}
  </LineButton>
}

export function Input(){
  const [inputText, setInputText] = useState("");
  const onChangeInput = e => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };

  return (
    <>
      <ChampionInput
        type="text"
        value={inputText}
        placeholder="챔피언 검색 (가렌, 갱플랭크)"
        onChange={onChangeInput}
      />
      <ResetButton onClick={onReset}>X</ResetButton>
    </>
  );
}

export function ChampionsImg(){
  
  return (
    <>
      <ChampionsImgFull></ChampionsImgFull>
    </>
  );
}

export function ChampionsImgFull(){
  let champImgData = ChampionApi();
  
  let dataList = [];

  for(let i = 0; i<champImgData[0].length; i++){
    let data = (
    <li>
      <img src={champImgData[0][i]} />
      <a>{champImgData[1][i]}</a>
    </li>)
    console.log(data);
    dataList.push(data);
  }

  return (
    <ol>
      {dataList}
    </ol>
  )
  // return;
 }