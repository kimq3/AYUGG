import { getRanker } from "model/api/ranking";
import { useEffect, useState } from "react";
import Nav from "view/nav";
import * as styled from "view/page/ranking/rankingstyle";
import ProgressBar from "view/page/ranking/progressBar";

function RankingDetail(){
    const [user, setUser]=useState([]);

    useEffect(()=>{
        getRanker('solo')
        .then((data)=>{
            setUser(data);
        });
    },[]);


    return (
        <div>
            <Nav></Nav>
            
            <styled.Table>
                <styled.MainTr>
                    <styled.Th>순위</styled.Th>
                    <styled.NameTh>닉네임</styled.NameTh>
                    <styled.Th>티어</styled.Th>
                    <styled.Th>레벨</styled.Th>
                    <styled.Th>리그포인트</styled.Th>
                    <styled.Th>승률</styled.Th>
                    <styled.Th></styled.Th>
                </styled.MainTr>
                {user.map((info,index)=>{
                    return(
                        <styled.MainTr key={index}>
                            <styled.Td>{index+1}</styled.Td>
                            <styled.TdName>
                                <styled.IconImage src={`http://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${info.icon}.png`}></styled.IconImage>
                                <styled.NameSpan>{info.summonerName}</styled.NameSpan>
                            </styled.TdName>
                            <styled.Td>{info.tier}</styled.Td>
                            <styled.Td>{info.level}</styled.Td>
                            <styled.Td>{info.leaguePoints} LP</styled.Td>                                                   
                            <styled.TdWins>
                                <ProgressBar progress={info.percent} win={info.wins} lose={info.losses}/> 
                            </styled.TdWins> 
                            <styled.TdPercent>{info.percent}%</styled.TdPercent>                           
                            
                        </styled.MainTr>
                    );
                })}
            </styled.Table>
        </div>
    );
}

export default RankingDetail;