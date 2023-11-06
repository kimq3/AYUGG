import { getRanker } from "model/api/ranking";
import { useEffect, useState } from "react";
import Nav from "view/nav";

function RankingMain(){
    const [user, setUser]=useState([]);

    useEffect(()=>{
        getRanker()
        .then((data)=>{
            data=data.slice(-100);
            for(let i=0;i<data.length; i++){
                let avg;
                avg=Math.ceil((data[i].wins/(data[i].wins+data[i].losses))*100);
                data[i]['percent']=avg;
            }
            setUser(data);
            console.log('결과',data);
        });
    },[]);

    return (
        <div>
            <Nav></Nav>
            <div>랭킹페이지입니다.</div>
            <table>
                <tr>
                    <th>순위</th>
                    <th>닉네임</th>
                    <th>티어</th>
                    <th>리그포인트</th>
                    <th>승리</th>
                    <th>패배</th>
                    <th>승률</th>
                </tr>
                {user.map((info,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{info.summonerName}</td>
                            <td>{info.tier}</td>
                            <td>{info.leaguePoints}</td>
                            <td>{info.wins}</td>
                            <td>{info.losses}</td>
                            <td>{info.percent}%</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default RankingMain;