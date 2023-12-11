import React from 'react';
import * as styled from './rankingstyle';
 
function ProgressBar({progress, win, lose}) {
      
    return (
            <styled.Parentdiv>
                <styled.Childdiv $width={progress}>
                    <styled.ProgressText>{win} W</styled.ProgressText>     
                </styled.Childdiv>
                <div>
                    <styled.ProgressText>{lose} L</styled.ProgressText>
                </div>  
            </styled.Parentdiv> 
    );
}
 
export default ProgressBar;