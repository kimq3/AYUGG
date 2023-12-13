import Nav from "view/nav";
import React, { useEffect, useState } from "react";
import * as styled from "./eventStyle";
import { postEvent } from "model/api/event";
import { monthButtons } from "./eventbutton";




const Timeline = ({ timeline , setMonth }) => {

  function handleMonth(e){
      setMonth(e.target.value);
      console.log('찍힘? ', e.target.value);
  }

  
  return (
    <>
      <styled.Container>
            <styled.Maindiv>
                {
                    monthButtons.map((info, index)=>{
                        return(
                            <>
                                <styled.MonthButton key={index} value={info.value} onClick={handleMonth}>
                                    {info.name}
                                </styled.MonthButton>
                            </>
                        )
                    })
                }
            </styled.Maindiv>
        {timeline.map((item, index) => {
          return <TimelineItem key={index} timeline={item} />;
        })}
      </styled.Container>
    </>
  );
};



const TimelineItem = ({ timeline }) => {
  const date = timeline.date.replaceAll(".", "").split(" ");
  return (
    <>
      <styled.TimelineContainer>
        <styled.TimelineItemHeader>
          {date[1]}.{date[2]} {`(${date[3]})`}
        </styled.TimelineItemHeader>
        <styled.TimelineItemBody>
          <styled.TimelineItemText>
            {timeline.time}
          </styled.TimelineItemText>
          <styled.TimelineItemTeamScore>
            <styled.TimelineItemTeam>
              {timeline.blueName}
              <styled.TimelineItemTeamImg
                src={timeline.blueImg}
                alt={timeline.blueName}
              />
            </styled.TimelineItemTeam>
            <styled.TimelineItemText
              style={{
                width: "5rem",
                textAlign: "center",
              }}
            >
              {timeline.blueScore} : {timeline.redScore}
            </styled.TimelineItemText>
            <styled.TimelineItemTeam>
              <styled.TimelineItemTeamImg
                src={timeline.redImg}
                alt={timeline.redName}
              />
              {timeline.redName}
            </styled.TimelineItemTeam>
          </styled.TimelineItemTeamScore>
          <styled.TimelineItemText
            style={{
              marginRight: "1rem",
            }}
          >
            {timeline.eventName}
          </styled.TimelineItemText>
        </styled.TimelineItemBody>
      </styled.TimelineContainer>
    </>
  );
};



function EventMain(){
    const [month, setMonth] = useState("11");
    const [timeline, setTimeline] = useState([]);

    useEffect(()=>{
        postEvent(month)
        .then((data)=>{
            setTimeline(data);
        })
    },[month]);
    

    return (
        <div>
            <Nav></Nav>

            
            <Timeline timeline={timeline} setMonth={setMonth}/>
        </div>
    );
}

export default EventMain;