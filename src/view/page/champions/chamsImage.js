import { useEffect, useState } from "react";
import * as style from "./champsStyle";
import { Link, useLocation } from 'react-router-dom';
import { ChampionApi } from "model/constantly/apiConstants";

export function Option() {
  const tierList = ["Challenger", "Grandmaster", "Master", "Diamond", "Emerald", "Platinum", "Gold", "Silver", "Bronze", "Iron"];
  const [tierSelected, setTierSelected] = useState("Emerald");
  const tierChangeHandle = (e) => {
    setTierSelected(e.target.value);
  };

  return <>
    <style.ChampionsSelect onChange={tierChangeHandle} value={tierSelected}>
      {tierList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </style.ChampionsSelect>
  </>;
}

export  function Line(props) {
  const { pathname } = useLocation();

  return <style.LineButton $pathname={pathname} $line={props.value}>
    <style.ChampionLink to={"/" + props.value}>{props.name}</style.ChampionLink>
  </style.LineButton>
}

export function Input(){
  const [inputText, setInputText] = useState();
  const onChangeInput = e => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };

  return (
    <style.ChampionsInputBox>
      <style.ChampionsInput
        type="text"
        value={inputText}
        placeholder="챔피언 검색 (가렌, 갱플랭크 ...)"
        onChange={onChangeInput}
      />
      <style.ResetButton onClick={onReset}>X</style.ResetButton>
    </style.ChampionsInputBox>
  );
}

export function ChampionsImg(){
  const [imgTag, setImgTag] = useState([]);

  useEffect(() => {
    ChampionsImgFull().then((data) => {
      setImgTag(data);
    });
  }, [])

  return (
    <>
      {imgTag}
    </>
  );
}

export async function ChampionsImgFull(){
  let champImgData = await ChampionApi();

  let fullData = [];
  for(let i = 0; i<champImgData[0].length; i++){
    let data = (
      <style.ListBox key={i}>
        <li>
          <style.ChampionLink to="/details">
            <style.ChampionsImgStyle src={champImgData[0][i]} />
          </style.ChampionLink>
          <style.ChampionLink to="/details">
            <style.ChampionsSpanStyle>{champImgData[1][i]}</style.ChampionsSpanStyle>
          </style.ChampionLink>
        </li>
      </style.ListBox>
    )
    fullData.push(data);
  }
  
  return (
    <style.ChampionsOlStyle>
      {fullData}
    </style.ChampionsOlStyle>
  )
 }