import Nav from "view/nav";
import * as style from "./championsStyle";
import * as components from "./championsComponents";

function ChampionsMain() {
  return (
    <div>
      <Nav></Nav>
      <style.ChampionsBox $height="50px">
        <style.WrappingBox>
          <components.Option />
          <components.Option />
        </style.WrappingBox>
        <style.WrappingBox>
          <components.Line value="top" name="탑" />
          <components.Line value="jungle" name="정글" />
          <components.Line value="mid" name="미드" />
          <components.Line value="adc" name="원딜" />
          <components.Line value="support" name="서포터" />
        </style.WrappingBox>
      </style.ChampionsBox>

      <style.ChampionsBox $height="auto">
        <style.ArticleBox $width="40%">
          <components.Input />
          <components.ChampionsImg></components.ChampionsImg>
        </style.ArticleBox>
        <style.ArticleBox $width="auto">dd</style.ArticleBox>
      </style.ChampionsBox>
    </div>
  );
}

export default ChampionsMain;
