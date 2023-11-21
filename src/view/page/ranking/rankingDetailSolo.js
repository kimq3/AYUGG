import { getRanker } from "model/api/ranking";
import { useEffect, useState } from "react";
import Nav from "view/nav";
import * as style from "view/page/ranking/rankingstyle";
import ProgressBar from "./progressBar";

function RankingDetail(){
    const [user, setUser]=useState([]);

    useEffect(()=>{
        getRanker()
        .then((data)=>{
            setUser(data);
            // console.log('결과',data);
        });
    },[]);


    return (
        <div>
            <Nav></Nav>
            
            <style.Table>
                <style.TopTr>
                    <style.Th>순위</style.Th>
                    <style.NameTh>닉네임</style.NameTh>
                    <style.Th>티어</style.Th>
                    <style.Th>레벨</style.Th>
                    <style.Th>리그포인트</style.Th>
                    <style.Th>승률</style.Th>
                    <style.Th></style.Th>
                </style.TopTr>
                {user.map((info,index)=>{
                    return(
                        <style.MainTr key={index}>
                            <style.Td>{index+1}</style.Td>
                            <style.TdName>
                                <style.IconImage src="http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/1.png"></style.IconImage>
                                <style.NameSpan>{info.summonerName}</style.NameSpan>
                            </style.TdName>
                            <style.Td>{info.tier}</style.Td>
                            <style.Td>{info.level}</style.Td>
                            <style.Td>{info.leaguePoints} LP</style.Td>                                                   
                            <style.TdWins>
                                <ProgressBar progress={info.percent} win={info.wins} lose={info.losses}/> 
                            </style.TdWins> 
                            <style.TdPercent>{info.percent}%</style.TdPercent>                           
                            
                        </style.MainTr>
                    );
                })}
            </style.Table>
        </div>
    );
}

export default RankingDetail;