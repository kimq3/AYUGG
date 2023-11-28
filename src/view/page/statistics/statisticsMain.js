import { getChampion, postChampion } from "model/api/statistics";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "view/nav";
import { lineButtons, tierButtons } from "./filterData";

function StatisticsMain(){
    const [cham, setCham]=useState([]);
    const [line, setLine]=useState('all');
    const [tier, setTier]=useState('plattinum');

    useEffect(()=>{
        getChampion()
        .then((data)=>{
            setCham(data);
        })
    },[]);

    useEffect(()=>{
        postChampion(tier,line)
        .then((data)=>{
            setCham(data);
            console.log(data);
        });
    },[line]);

    useEffect(()=>{
        postChampion(tier,line)
        .then((data)=>{
            setCham(data);
            console.log('티어',data);
        });
    },[tier]);


    function handleLine(e){
        setLine(e.target.value);  
    }

    function handleTier(e){
        setTier(e.target.value);
        
    }

    return (
        <div>
            <Nav></Nav>
            <div>
                {tierButtons.map((info, index)=>{
                    return(
                        <>
                            <button key={index} value={info.value} onClick={handleTier}>
                                {info.name}
                            </button>
                        </>
                    );
                })}
            </div>
            <div>
                {lineButtons.map((info, index)=>{
                    return(
                        <>
                            <button key={index} value={info.value} onClick={handleLine}>
                                {info.name}
                            </button>
                        </>
                    );
                })}
            </div>
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
                            <td>{info.gold}G</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default StatisticsMain;