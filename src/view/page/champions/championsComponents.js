import { useState } from "react";
import { ChampionsSelect, LineButton, ChampionInput, ResetButton } from "./championsStyle";
import { Link, useLocation } from 'react-router-dom';

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