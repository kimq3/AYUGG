import Nav from "view/nav";
import * as style from "./champsStyle";
import * as champImg from "./chamsImage";
import MiddleLineButton from "./champsLine";
import ChampionsRanking from "./championsRanking";

function ChampionsMain() {
  return (
    <div>
      <Nav />
      <MiddleLineButton/>
      <style.ChampionsBox $height="auto">
        <style.ArticleBox $seq="1" $width="40%">
          <champImg.Input />
          <champImg.ChampionsImg></champImg.ChampionsImg>
        </style.ArticleBox>
        <style.ArticleBox $seq="2" $width="58%">
          <ChampionsRanking />
        </style.ArticleBox>
      </style.ChampionsBox>
    </div>
  );
}

export default ChampionsMain;
