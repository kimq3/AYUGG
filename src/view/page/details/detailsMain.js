import Nav from "view/nav";
import FirstArticle from "./detailsBasicInfo";
import SecondArticle from "./detailsRune";
import { ChampionApi } from "model/constantly/apiConstants";

function ChampionsDetails() {
  ChampionApi();
  return (
    <>
      <Nav />
      <FirstArticle />
      <SecondArticle />
    </>
  );
}

export default ChampionsDetails;
