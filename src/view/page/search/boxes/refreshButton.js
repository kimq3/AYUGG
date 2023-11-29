import { RefreshButton, RefreshButtonImg } from "../searchStyle/refreshButtonStyle";

//refresh버튼
function Button() {
  const handleRefresh = () => {
    window.location.reload();
    // window.location.href = window.location.search;
  };

  return (
    <RefreshButton>
      <RefreshButtonImg onClick={handleRefresh} src={`${process.env.PUBLIC_URL}` + '/assets/images/reset-icon.svg'} />
    </RefreshButton>
  );
}
export default Button;