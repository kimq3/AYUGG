import { apiKey, NicknameUrl, IdUrl, MatchesUrl } from "model/constantly/apiConstants";
import { useState, useEffect } from 'react';

function GetData() {
    const nicknameList = [hideonbush, wh0areyou];
    const [multiDataList, setMultiDataList] = useState();
    const [loading, setLoading] = useState(true);

    let UserUrl = NicknameUrl + nicknameList[0] + "?api_key=" + apiKey;

    useEffect(() => {
        // nicknameList.map

        fetch(UserUrl)
        .then((res) => res.json())
        .then((rawData) => {
            let data = Object.values(rawData);
            let UidUrl = IdUrl + data[0] + "?api_key=" + apiKey;
            let MatchUrl = MatchesUrl + data[2] + "/ids?count=5&api_key=" + apiKey;
    
            console.log(data);
            setMultiDataList(multiDataList);
            setLoading(false);
        })
    }, []);

    return { loading , multiDataList };
}
export default GetData;