import Nav from "view/nav";
import FirstArticle from "./detailsBasicInfo";
import SecondArticle from "./detailsRune";
import ThirdArticle from "./detailsItem";
import { ChampionDetailDataApi as getChamp, postChampionDetailDataApi as postChamp } from "model/api/champions";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ChampionsDetails() {
  const [detailData, setdetailData] = useState();
  const { id } = useParams();

  useEffect(()=>{
    postChamp(id).then((raw)=>{
      setdetailData(raw);
    })
  },[id]);

  // console.log(detailData);

  return (
    <>
      <Nav />
      {detailData && <FirstArticle data={detailData} />}
      {detailData && <SecondArticle data={detailData} />}
      {detailData && <ThirdArticle data={detailData} />}
    </>
  );
}

export default ChampionsDetails;
