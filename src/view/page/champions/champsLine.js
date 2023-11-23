import * as style from "./champsStyle";
import * as components from "./chamsImage";

export default function MiddleLineButton() {
  return (
    <>
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
    </>
  );
}
