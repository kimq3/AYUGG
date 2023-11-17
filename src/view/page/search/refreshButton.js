import { RefreshButton, RefreshButtonImg } from "view/page/search/searchStyle/refreshButtonStyle";

//refresh버튼
function Button() {
  return (
    <RefreshButton>
      <RefreshButtonImg src={`${process.env.PUBLIC_URL}` + 'assets/images/reset-icon.svg'} />
    </RefreshButton>
  );
}

export default Button;