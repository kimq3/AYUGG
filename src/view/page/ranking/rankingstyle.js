import styled from "styled-components";

export const Table=styled.table`
    border-collapse: collapse;
    width: 60%;
    margin: 25px auto;
    
`;

export const Th=styled.th`
    border-bottom: 3px solid #dddddd;
    text-align: center;
    padding: 8px;
`;
export const NameTh=styled.th`
    border-bottom: 3px solid #dddddd;
    text-align: center;
    padding: 8px;
`;

export const Td=styled.td`
    text-align: center;
    padding: 10px;
    color: white;
`;

export const TdName=styled.td`
    font-weight: bold;
    color: white;
    display: flex;
`;

export const NameSpan=styled.span`
    padding: 10px;
`;

export const TdWins=styled(Td)`
    width: 20%;
`;

export const TdPercent=styled(Td)`
    font-weight: bold;
    text-align: left;
`;

export const TopTr=styled.tr`
    background-color: #fff;
`;

export const MainTr=styled.tr`
    border-bottom: 1px solid #dddddd;
`;



export const IconImage=styled.img`
    padding: 10px;
    width: 30px;
    height: 30px;
    resizeMode: contain;
    margin-right: 5px;
`;

