import { useContext } from "react";
import * as styled from "view/page/challenger/style/middleSytle"
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
        <styled.Maindiv>
            <styled.GameNamespan>소환사의 협곡 (솔로랭크)</styled.GameNamespan>
            {data.teams[0].win ? <styled.winspan>승</styled.winspan> : <styled.losespan>패</styled.losespan>}
            <styled.Playspan>playTime {minute}:{second < 10 ? '0'+second: second}</styled.Playspan>
            {data.teams[1].win ? <styled.winspan>승</styled.winspan> : <styled.losespan>패</styled.losespan>}
            <styled.Detaildiv onClick={changeShow}>자세히보기</styled.Detaildiv>
        </styled.Maindiv>    
    );
}

export default MiddleScreen;