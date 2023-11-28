import * as style from "./detailsStyle";
import { ChampionDetailApi as ChampApi } from "model/constantly/apiConstants";
import { useEffect, useState } from "react";

const detailData = await ChampApi();
const version = detailData.version;
const urlStart = "https://ddragon.leagueoflegends.com/cdn/";
const basicItemImgUrl = urlStart + version + "/img/item/";

async function NavBar(props) {
  let data = detailData.mythicBuild;
  let mythic = props.ver === "1" ? data.mythic1 : data.mythic2;

  let mythicImg = basicItemImgUrl + mythic.id + ".png";

  return (
    <>
      <style.ItemNavButtonStyle>
        <style.ItemNavStyle $selected={props.selected}>
          <style.ItemNavImgBoxStyle>
            <style.ItemNavImgStyle src={mythicImg}/>
          </style.ItemNavImgBoxStyle>
          <style.ItemNavNameBoxStyle>
            <style.ItemNavNameStyle>
              {mythic.name}
            </style.ItemNavNameStyle>
          </style.ItemNavNameBoxStyle>
        </style.ItemNavStyle>
      </style.ItemNavButtonStyle>
    </>
  );
}

function MiddleTitle(props){
  let seq = props.seq === "1" ? "1" : "2";
  let title = props.seq === "1" ? "전설 아이템 빌드" : "전설 아이템";

  return (
    <style.MiddleTitleDivStyle $seq={seq}>
      <style.MiddleTitleStyle $size="60%">{title}</style.MiddleTitleStyle>
      <style.MiddleTitleStyle $size="20%">픽률</style.MiddleTitleStyle>
      <style.MiddleTitleStyle $size="20%">승률</style.MiddleTitleStyle>
    </style.MiddleTitleDivStyle>
  );
}

async function DetailItem(props) {
  let data = detailData.mythicBuild;
  let mythic = props.ver === "1" ? data.mythic1 : data.mythic2;

  let orderA = ItemOrder(1);
  let orderB = ItemOrder(2);
  function ItemOrder(ver) {
    let itemData = ver === 1 ? mythic.version1 : mythic.version2;
    let mythicImg = basicItemImgUrl + mythic.id + ".png";
    let legendAImg = basicItemImgUrl + itemData.legend1 + ".png";
    let legendBImg = basicItemImgUrl + itemData.legend2 + ".png";
    let arrow = `${process.env.PUBLIC_URL}` + 'assets/images/arrow-icon-24' + '.svg';

    return (
      <style.ItemBoxStyle $seq={ver}>
        <style.ItemWrappingBoxStyle>
          <style.ItemImgStyle $state="m" src={mythicImg} />
          <style.ItemImgStyle src={arrow} />
          <style.ItemImgStyle src={legendAImg} />
          <style.ItemImgStyle src={arrow} />
          <style.ItemImgStyle src={legendBImg} />
        </style.ItemWrappingBoxStyle>
        <style.ItemRateBoxStyle>{itemData.pickRate}</style.ItemRateBoxStyle>
        <style.ItemRateBoxStyle>{itemData.winRate}</style.ItemRateBoxStyle>
      </style.ItemBoxStyle>
    )
  }

  let legendA = LegendItem(1);
  let legendB = LegendItem(2);
  function LegendItem(ver) {
    let itemData = ver === 1 ? detailData.legend1 : detailData.legend2;
    let legendImg = basicItemImgUrl + itemData.id + ".png";
    
    return(
      <style.ItemBoxStyle $seq={ver}>
        <style.ItemWrappingBoxStyle $state="legend">
          <style.ItemImgStyle src={legendImg} />
          <style.ItemNameStyle>{itemData.name}</style.ItemNameStyle>
        </style.ItemWrappingBoxStyle>
        <style.ItemRateBoxStyle>{itemData.pickRate}</style.ItemRateBoxStyle>
        <style.ItemRateBoxStyle>{itemData.winRate}</style.ItemRateBoxStyle>
      </style.ItemBoxStyle>
    )
  }

  return(
    <style.DetailItemBoxStyle  $display={props.selected}>
      <style.ItemArticleBoxStyle $position="left">
        {orderA}
        {orderB}
      </style.ItemArticleBoxStyle>
      <style.ItemArticleBoxStyle $position="right">
        {legendA}
        {legendB}
      </style.ItemArticleBoxStyle>
    </style.DetailItemBoxStyle>
  );
}

// detailsMain.js에 뱉어내는
export default function ThirdArticle() {
  const [navA, setNavA] = useState();
  const [navB, setNavB] = useState();
  const [detailItem, setDetailItem] = useState();
  const [version, setVer] = useState(1);
  
  let AProps = {
    ver: "1",
    selected: "true"
  };
  let BProps = {
    ver: "2",
    selected: "false"
  };

  useEffect(() => {
    NavBar(AProps).then((data)=>{
      setNavA(data);
    })
    NavBar(BProps).then((data)=>{
      setNavB(data);
    })
    DetailItem(AProps).then((data) => {
      setDetailItem(data);
    })
  }, [])

  function ClickEvent() {
    if(version === 1) {
      AProps.selected = "false";
      BProps.selected = "true";
      NavBar(AProps).then((data)=>{
        setNavA(data);
      });
      NavBar(BProps).then((data)=>{
        setNavB(data);
      });
      DetailItem(BProps).then((data) => {
        setDetailItem(data);
      });
      setVer(2);
    } else {
      AProps.selected = "true";
      BProps.selected = "false";
      NavBar(AProps).then((data)=>{
        setNavA(data);
      });
      NavBar(BProps).then((data)=>{
        setNavB(data);
      });
      DetailItem(AProps).then((data) => {
        setDetailItem(data);
      });
      setVer(1);
    }
  }

  return (
    <>
      <style.OutBoxStyle $height="300px">
        <style.ItemTitleBoxStyle>
          <style.ItemTitleStyle>아이템 빌드</style.ItemTitleStyle>
        </style.ItemTitleBoxStyle>
        <style.ItemOutBoxStyle>
          <style.ItemNavBoxStyle onClick={ClickEvent}>
            {navA}
            {navB}
          </style.ItemNavBoxStyle>
          <style.MiddleWrappingBox>
            <MiddleTitle seq="1" />
            <MiddleTitle seq="2" />
          </style.MiddleWrappingBox>
          {detailItem}
        </style.ItemOutBoxStyle>
      </style.OutBoxStyle>
    </>
  );
}
