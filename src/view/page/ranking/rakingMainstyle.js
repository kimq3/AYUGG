import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.main`
  height: 800px;
  width: 600px;
  color: #fff;
  margin: 0 40px;
`;

export const StatusTable = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

export const StatusTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #fff;
  padding: 10px;
`;

export const StatusTableRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const RankStatusTableRow = styled.div`
  width: 10%;
  text-align: center;
`;

export const NickStatusTableRow = styled.div`
  width: 30%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StatusTableDataContainer = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StatusTableData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding: 0 10px 9px 10px;
  font-size: 10pt;
  font-weight: bold;
  width: 100%;
`;
export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 100%;
  height: 14px;
  margin-right: 10px;
`;

export const BottomDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const StyleLink = styled(Link)`
    float: right;
    padding: 10px;
    text-decoration: underline dotted 3px ;
    color: #fff;
`;
