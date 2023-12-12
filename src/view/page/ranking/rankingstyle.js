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


export const MainTr=styled.tr`
    border-bottom: 1px solid #dddddd;
    color: white;
`;



export const IconImage=styled.img`
    padding: 10px;
    width: 30px;
    height: 30px;
    resizeMode: contain;
    margin-right: 5px;
`;

/* --------------------------------------------- */
// custom gauge chart styled component 영역

export const Parentdiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 25px;
    width: 100%;
    background-color: #E64638;
    text-align: right;
    border: 2px solid #dddddd;
`;

export const Childdiv = styled.div`
    width: ${(props)=> props.$width}% ;
    height: 100%;
    background-color: #3490E5;
    text-align: left;
`;

export const ProgressText = styled.span`
    padding: 5px;
    color: white;
`;

