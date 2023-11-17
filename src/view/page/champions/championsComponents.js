import { useEffect, useState } from "react";
import * as cs from "./championsStyle";
import { Link, useLocation } from 'react-router-dom';
import { ChampionApi } from "model/constantly/apiConstants";

export function Option() {
  const tierList = ["Challenger", "Grandmaster", "Master", "Diamond", "Emerald", "Platinum", "Gold", "Silver", "Bronze", "Iron"];
  const [tierSelected, setTierSelected] = useState("Emerald");
  const tierChangeHandle = (e) => {
    setTierSelected(e.target.value);
  };

  return <>
    <cs.ChampionsSelect onChange={tierChangeHandle} value={tierSelected}>
      {tierList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </cs.ChampionsSelect>
  </>;
}

export  function Line(props) {
  const { pathname } = useLocation();
  const lineClick = () => {
    <Link to={"/" + props.value}></Link>
  }

  return <cs.LineButton $pathname={pathname} $line={props.value} onClick={lineClick}>
    {props.name}
  </cs.LineButton>
}

export function Input(){
  const [inputText, setInputText] = useState("수정 필요 / placeholer");
  const onChangeInput = e => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };

  return (
    <cs.ChampionsInputBox>
      <cs.ChampionsInput
        type="text"
        value={inputText}
        placeholder="챔피언 검색 (가렌, 갱플랭크 ...)"
        onChange={onChangeInput}
      />
      <cs.ResetButton onClick={onReset}>X</cs.ResetButton>
    </cs.ChampionsInputBox>
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
  let [dataList, setDataList] = useState([]);
  // console.log(champImgData);
  useEffect(()=>{
    let fullData = [];
    if(champImgData.length === 3) {
      for(let i = 0; i<champImgData[0].length; i++){
        let data = (
          <cs.ListBox key={i}>
            <li>
              <cs.ChampionLink to="/details">
                <cs.ChampionsImgStyle src={champImgData[0][i]} />
              </cs.ChampionLink>
              <cs.ChampionLink to="/details">
                <cs.ChampionsSpanStyle>{champImgData[1][i]}</cs.ChampionsSpanStyle>
              </cs.ChampionLink>
            </li>
          </cs.ListBox>
        )
        fullData.push(data);
      }

      setDataList(fullData);
    }
  }, [champImgData]);

  return (
    <cs.ChampionsOlStyle>
      {dataList}
    </cs.ChampionsOlStyle>
  )
 }