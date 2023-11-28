import Nav from "view/nav";
import FirstArticle from "./detailsBasicInfo";
import SecondArticle from "./detailsRune";
import { ChampionApi } from "model/constantly/apiConstants";
import ThirdArticle from "./detailsItem";

function ChampionsDetails() {
  ChampionApi();
  return (
    <>
      <Nav />
      <FirstArticle />
      <SecondArticle />
      <ThirdArticle />
    </>
  );
}

export default ChampionsDetails;
