import { postChampion } from "model/api/statistics";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "view/nav";
import { lineButtons, tierButtons } from "./filterData";
import * as style from "view/page/statistics/statisticsStyle";
import ProgressBar1 from "./progressBar";

function StatisticsMain(){
    const [cham, setCham]=useState([]);
    const [line, setLine]=useState('all');
    const [tier, setTier]=useState('plattinum');

    useEffect(()=>{
        postChampion(tier,line)
        .then((data)=>{
            setCham(data);
        });
    },[]);

    useEffect(()=>{
        postChampion(tier,line)
        .then((data)=>{
            setCham(data);
        });
    },[line]);

    useEffect(()=>{
        postChampion(tier,line)
        .then((data)=>{
            setCham(data);
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
            <style.FilTable>
                <style.Tr>
                    <style.Filth>티어</style.Filth>
                    <style.FilTd>{tier.toUpperCase()}</style.FilTd>
                    <td>
                        <style.FilDiv>
                            {tierButtons.map((info, index)=>{
                                return(
                                    <>
                                        <style.Button1 key={index} value={info.value} onClick={handleTier}>
                                            {info.name}
                                        </style.Button1>
                                    </>
                                );
                            })}
                        </style.FilDiv>
                    </td>
                </style.Tr>
                <style.Tr>
                    <style.Filth>포지션</style.Filth>
                    <style.FilTd>{line.toUpperCase()}</style.FilTd>
                    <td>
                        <style.FilDiv>
                            {lineButtons.map((info, index)=>{
                                return(
                                    <>
                                        <style.Button1 key={index} value={info.value} onClick={handleLine}>
                                            {info.name}
                                        </style.Button1>
                                    </>
                                );
                            })}
                        </style.FilDiv>
                    </td>
                </style.Tr>
            </style.FilTable>
            
            <style.Table>
                <style.Tr>
                    <style.Th>순위</style.Th>
                    <style.Th>챔피언</style.Th>
                    <style.Th>플레이 수</style.Th>
                    <style.Th>평점</style.Th>
                    <style.Th>승률</style.Th>
                    <style.Th>픽률</style.Th>
                    <style.Th>밴률</style.Th>
                    <style.Th>cs</style.Th>
                    <style.Th>골드</style.Th>
                </style.Tr>
                {cham.map((info,index)=>{
                    const iwin=info.win.replace('%','');
                    const ipicks=info.picks.replace('%','');
                    const ibanned=info.banned.replace('%','');

                    return(
                        <style.Tr key={index}>
                            <style.Td>{info.rank}</style.Td>
                            <style.Td>
                                {info.champion}
                            </style.Td>
                            <style.Td>{info.gameplay}</style.Td>
                            <style.Td>{info.rate}</style.Td>
                            <style.Tds>
                                <style.MainDiv>
                                    <div>
                                        <ProgressBar1 bgcolor="blue" progress={iwin} height={15}/>
                                    </div>
                                    <div>{info.win}</div>
                                </style.MainDiv>                                
                            </style.Tds>
                            <style.Tds>
                                <style.MainDiv>
                                    <div>
                                        <ProgressBar1 bgcolor="yellow" progress={ipicks} height={15} />
                                    </div>
                                    <div>{info.picks}</div>
                                </style.MainDiv>                                
                            </style.Tds>
                            <style.Tds>
                                <style.MainDiv>
                                    <div>
                                        <ProgressBar1 bgcolor="red" progress={ibanned} height={15}/>
                                    </div>
                                    <div>{info.banned}</div>
                                </style.MainDiv>                                
                            </style.Tds>
                            <style.Td>{info.cs}</style.Td>
                            <style.Td>{info.gold}G</style.Td>
                        </style.Tr>
                    );
                })}
            </style.Table>
        </div>
    );
}

export default StatisticsMain;