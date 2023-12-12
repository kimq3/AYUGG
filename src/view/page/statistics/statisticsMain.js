import { postChampion } from "model/api/statistics";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "view/nav";
import { lineButtons, tierButtons } from "./filterData";
import * as styled from "view/page/statistics/statisticsStyle";
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
    },[tier, line]);


    function handleLine(e){
        setLine(e.target.value);
    }

    function handleTier(e){
        setTier(e.target.value);
    }

    return (
        <div>
            <Nav></Nav>
            <styled.FilTable>
                <styled.Tr>
                    <styled.Filth>티어</styled.Filth>
                    <styled.FilTd>{tier.toUpperCase()}</styled.FilTd>
                    <td>
                        <styled.FilDiv>
                            {tierButtons.map((info, index)=>{
                                return(
                                    <>
                                        <styled.Button1 key={index} value={info.value} onClick={handleTier}>
                                            {info.name}
                                        </styled.Button1>
                                    </>
                                );
                            })}
                        </styled.FilDiv>
                    </td>
                </styled.Tr>
                <styled.Tr>
                    <styled.Filth>포지션</styled.Filth>
                    <styled.FilTd>{line.toUpperCase()}</styled.FilTd>
                    <td>
                        <styled.FilDiv>
                            {lineButtons.map((info, index)=>{
                                return(
                                    <>
                                        <styled.Button1 key={index} value={info.value} onClick={handleLine}>
                                            {info.name}
                                        </styled.Button1>
                                    </>
                                );
                            })}
                        </styled.FilDiv>
                    </td>
                </styled.Tr>
            </styled.FilTable>
            
            <styled.Table>
                <styled.Tr>
                    <styled.Th>순위</styled.Th>
                    <styled.Th>챔피언</styled.Th>
                    <styled.Th>플레이 수</styled.Th>
                    <styled.Th>평점</styled.Th>
                    <styled.Th>승률</styled.Th>
                    <styled.Th>픽률</styled.Th>
                    <styled.Th>밴률</styled.Th>
                    <styled.Th>cs</styled.Th>
                    <styled.Th>골드</styled.Th>
                </styled.Tr>
                {cham.map((info,index)=>{
                    const iwin=info.win.replace('%','');
                    const ipicks=info.picks.replace('%','');
                    const ibanned=info.banned.replace('%','');

                    return(
                        <styled.Tr key={index}>
                            <styled.Td>{info.rank}</styled.Td>
                            <styled.TdName>
                                <styled.IconImage src={info.img}></styled.IconImage>
                                <styled.NameSpan>{info.champion}</styled.NameSpan>
                            </styled.TdName>
                            <styled.Td>{info.gameplay}</styled.Td>
                            <styled.Td>{info.rate}</styled.Td>
                            <styled.Tds>
                                <styled.MainDiv>
                                    <div>
                                        <ProgressBar1 bgcolor="#3490E5" progress={iwin} height={15}/>
                                    </div>
                                    <div>{info.win}</div>
                                </styled.MainDiv>                                
                            </styled.Tds>
                            <styled.Tds>
                                <styled.MainDiv>
                                    <div>
                                        <ProgressBar1 bgcolor="#DBC926" progress={ipicks} height={15} />
                                    </div>
                                    <div>{info.picks}</div>
                                </styled.MainDiv>                                
                            </styled.Tds>
                            <styled.Tds>
                                <styled.MainDiv>
                                    <div>
                                        <ProgressBar1 bgcolor="#E64638" progress={ibanned} height={15}/>
                                    </div>
                                    <div>{info.banned}</div>
                                </styled.MainDiv>                                
                            </styled.Tds>
                            <styled.Td>{info.cs}</styled.Td>
                            <styled.Td>{info.gold}G</styled.Td>
                        </styled.Tr>
                    );
                })}
            </styled.Table>
        </div>
    );
}

export default StatisticsMain;