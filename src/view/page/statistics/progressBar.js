import React from 'react';
import * as styled from './statisticsStyle';
 
const ProgressBar1 = ({bgcolor,progress,height}) => {
    
    return (
    <styled.Parentdiv $height={height}>
      <styled.Childdiv $width={progress} $bgcolor={bgcolor}>
      </styled.Childdiv>
    </styled.Parentdiv>
    )
}
 
export default ProgressBar1;