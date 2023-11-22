import { RefreshButton, RefreshButtonImg } from "view/page/search/searchStyle/refreshButtonStyle";

//refresh버튼
function Button() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <RefreshButton>
      <RefreshButtonImg onClick={handleRefresh} src={`${process.env.PUBLIC_URL}` + 'assets/images/reset-icon.svg'} />
    </RefreshButton>
  );
}
export default Button;