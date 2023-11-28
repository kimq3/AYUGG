import { getChampion } from "model/api/statistics";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "view/nav";

function StatisticsMain(){
    const [cham, setCham]=useState([]);

    useEffect(()=>{
        getChampion()
        .then((data)=>{
            setCham(data);
            console.log('결과', data)
        })
    },[])

    return (
        <div>
            <Nav></Nav>
            <table>
                <tr>
                    <th>순위</th>
                    <th>챔피언</th>
                    <th>플레이 수</th>
                    <th>평점</th>
                    <th>승률</th>
                    <th>픽률</th>
                    <th>밴률</th>
                    <th>cs</th>
                    <th>골드</th>
                </tr>
                {cham.map((info,index)=>{
                    return(
                        <tr key={index}>
                            <td>{info.rank}</td>
                            <td>{info.champion}</td>
                            <td>{info.gameplay}</td>
                            <td>{info.rate}</td>
                            <td>{info.win}</td>
                            <td>{info.picks}</td>
                            <td>{info.banned}</td>
                            <td>{info.cs}</td>
                            <td>{info.gold}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default StatisticsMain;