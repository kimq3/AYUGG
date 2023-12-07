import { useContext, useEffect } from "react";
import * as style from "view/page/challenger/style/middleSytle"
import { ChallengerContext } from "./totalFrame";

function MiddleScreen(props){

    const data = useContext(ChallengerContext);

    const minute=Math.round(data.gameDuration/60);
    const second=Math.round(data.gameDuration%60);

    function changeShow(){
        if(props.isShow === true){
            props.setShow(false);
        }
        else if(props.isShow === false){
            props.setShow(true);
        }
    }

    return (
        <style.Maindiv>
            <style.GameNamespan>소환사의 협곡 (솔로랭크)</style.GameNamespan>
            {data.teams[0].win ? <style.winspan>승</style.winspan> : <style.losespan>패</style.losespan>}
            <style.Playspan>playTime {minute}:{second < 10 ? '0'+second: second}</style.Playspan>
            {data.teams[1].win ? <style.winspan>승</style.winspan> : <style.losespan>패</style.losespan>}
            <style.Detaildiv onClick={changeShow}>자세히보기</style.Detaildiv>
        </style.Maindiv>    
    );
}

export default MiddleScreen;