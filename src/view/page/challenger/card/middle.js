import * as style from "view/page/challenger/style/middleSytle"

function MiddleScreen(props){
    const win=true; //UI와 삼항연산자가 먹히는지 보려는 test 변수
    const lose=false;  //UI와 삼항연산자가 먹히는지 보려는 test 변수

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
            {win ? <style.winspan>승</style.winspan> : <style.losespan>패</style.losespan>}
            <style.Playspan>playTime 27:33</style.Playspan>
            {lose ? <style.winspan>승</style.winspan> : <style.losespan>패</style.losespan>}
            <style.Detaildiv onClick={changeShow}>자세히보기</style.Detaildiv>
        </style.Maindiv>    
    );
}

export default MiddleScreen;