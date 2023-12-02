import React from 'react'
 
const ProgressBar1 = ({bgcolor,progress,height}) => {
    
    const Parentdiv = {
        height: height,
        width: '100px',
        backgroundColor: 'whitesmoke',
        margin: '5px',
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
      }
       
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}
 
export default ProgressBar1;