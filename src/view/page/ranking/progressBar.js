import React from 'react'
 
function ProgressBar({progress, win, lose}) {
    
    const Parentdiv = {
        display: 'flex',
        justifyContent:'space-between',
        height: 25,
        width: '100%',
        backgroundColor: '#E64638',
        textAlign: 'right',
        border: '2px solid #dddddd'
    };
     
    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: "#3490E5",
        textAlign: 'left',
    };
     
    const progresstext = {
        padding: 5,
        color: 'white',
    };
       
    return (
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}>{win} W</span>
                     
                </div>
                <div>
                    <sapn style={progresstext}>{lose} L</sapn>
                </div>  
            </div> 
    );
}
 
export default ProgressBar;