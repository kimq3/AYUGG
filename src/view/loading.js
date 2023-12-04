import React from 'react';
import * as Style from 'view/loadingStyle';

export const Loading = () => {
  return (
    <Style.Background>
        <Style.LoadingText>로딩중</Style.LoadingText>
         <img src='/assets/images/spinner.gif' alt="로딩중" width="5%" />
    </Style.Background>
    );
};
export default Loading;