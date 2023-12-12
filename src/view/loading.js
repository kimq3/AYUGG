import React from 'react';
import * as styled from 'view/loadingStyle';

export const Loading = () => {
  return (
    <styled.Background>
        <styled.LoadingText>로딩중</styled.LoadingText>
         <img src='/assets/images/spinner.gif' alt="로딩중" width="5%" />
    </styled.Background>
    );
};
export default Loading;