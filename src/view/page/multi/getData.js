import { apiKey, nicknameUrl, idUrl, matchesUrl, matchDataUrl } from "model/constantly/apiConstants";
import { useState, useEffect } from 'react';

function GetMultiData() {
    const nicknameList = ["hideonbush", "wh0areyou"];
    const [multiDataList, setMultiDataList] = useState([]);
    // const [loading, setLoading] = useState(true);
    const addList = (list) => {
        setMultiDataList([...multiDataList, list]);
    }

    for( let index = 0; index < nicknameList.length; index++)
    {
        //const [Data, setData] = useState({});
        /*const addData = (data) => {
            setData([...Data, data]);
        }*/
        let UserUrl = nicknameUrl + nicknameList[index] + "?api_key=" + apiKey;

        fetch(UserUrl)
        .then(response => response.json())
        .then(async(rawData) => {
            let UidUrl = idUrl + rawData.id + "?api_key=" + apiKey;
            let MatchUrl = matchesUrl + rawData.puuid + "/ids?count=5&api_key=" + apiKey;
            //addData({id: rawData.id});
            //addData({puuid: rawData.puuid});

            // let userData = await fetch(UidUrl)
            // .then((response1) => {
            //     return response1.json();
            // })
            // .then((rawData1) => {
            //     return rawData1[0];
            // });

            // let matchData = await fetch(MatchUrl)
            // .then((response2) => {
            //     return response2.json();
            // })
            // .then(async (rawData2) => {
            //     let data2 = Object.values(rawData2);
            //     for (let j = 0; j < 5; j++) {
            //     var ex = await fetch( MatchDataUrl + data2[j] + "?api_key=" + apiKey )
            //         .then((response2) => {
            //         return response2.json();
            //         })
            //         .then((rawData2) => {
            //         let data3 = Object.values(rawData2);
            //         return data3[1];
            //         });
            //     };
            //     console.log(ex);
            //     return ex;
            // });

            // console.log(userData, matchData);

            // setMultiDataList(data);
            // setLoading(false);
        });
        
        
    }

    return { };
}
export default GetMultiData;