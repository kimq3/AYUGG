import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2f2f2f;
  height: 100vh;
  width: 100vw;
  color: #000;
  margin-top:20px;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin-bottom: 1rem;
`;

export const TimelineItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #ABABAB;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
`;

export const TimelineItemBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  background: #fff;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
`;

export const TimelineItemText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  margin-Left: 1rem;
`;

export const TimelineItemTeamScore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TimelineItemTeam = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TimelineItemTeamImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Maindiv = styled.div`
  width: 900px;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding:25px;
`;

export const MonthButton = styled.button`
  width: 90px;
  height: 45px;
  background-color: #ABABAB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  border: 0px;
`;