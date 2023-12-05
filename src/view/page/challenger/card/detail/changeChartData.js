export function changeLeftChartData(data, type){
    let dataList = [];

    if(type === 'kills'){
        dataList=[
            {name:0, value: data.participants[0].kills},
            {name:1, value: data.participants[1].kills},
            {name:2, value: data.participants[2].kills},
            {name:3, value: data.participants[3].kills},
            {name:4, value: data.participants[4].kills},
        ];
    }
    else if(type === 'dealing'){
        dataList=[
            {name:0, value: data.participants[0].totalDamageDealtToChampions},
            {name:1, value: data.participants[1].totalDamageDealtToChampions},
            {name:2, value: data.participants[2].totalDamageDealtToChampions},
            {name:3, value: data.participants[3].totalDamageDealtToChampions},
            {name:4, value: data.participants[4].totalDamageDealtToChampions},
        ];
    }
    else if(type === 'cs'){
        dataList=[
            {name:0, value: data.participants[0].totalMinionsKilled + data.participants[0].neutralMinionsKilled},
            {name:1, value: data.participants[1].totalMinionsKilled + data.participants[1].neutralMinionsKilled},
            {name:2, value: data.participants[2].totalMinionsKilled + data.participants[2].neutralMinionsKilled},
            {name:3, value: data.participants[3].totalMinionsKilled + data.participants[3].neutralMinionsKilled},
            {name:4, value: data.participants[4].totalMinionsKilled + data.participants[4].neutralMinionsKilled},
        ];
    }
    else if(type === 'gold'){
        dataList=[
            {name:0, value: data.participants[0].goldEarned},
            {name:1, value: data.participants[1].goldEarned},
            {name:2, value: data.participants[2].goldEarned},
            {name:3, value: data.participants[3].goldEarned},
            {name:4, value: data.participants[4].goldEarned},
        ];
    }

    for(let i=0; i<dataList.length; i++){
        dataList[i].image = data.participants[i].championName;
    }
    
    return dataList;
}

export function changeRightChartData(data, type){
    let dataList = [];
    if(type === 'kills'){
        dataList=[
            {name:0, value: data.participants[5].kills},
            {name:1, value: data.participants[6].kills},
            {name:2, value: data.participants[7].kills},
            {name:3, value: data.participants[8].kills},
            {name:4, value: data.participants[9].kills},
        ];
    }
    else if(type === 'dealing'){
        dataList=[
            {name:0, value: data.participants[5].totalDamageDealtToChampions},
            {name:1, value: data.participants[6].totalDamageDealtToChampions},
            {name:2, value: data.participants[7].totalDamageDealtToChampions},
            {name:3, value: data.participants[8].totalDamageDealtToChampions},
            {name:4, value: data.participants[9].totalDamageDealtToChampions},
        ];
    }
    else if(type === 'cs'){
        dataList=[
            {name:0, value: data.participants[5].totalMinionsKilled + data.participants[0].neutralMinionsKilled},
            {name:1, value: data.participants[6].totalMinionsKilled + data.participants[1].neutralMinionsKilled},
            {name:2, value: data.participants[7].totalMinionsKilled + data.participants[2].neutralMinionsKilled},
            {name:3, value: data.participants[8].totalMinionsKilled + data.participants[3].neutralMinionsKilled},
            {name:4, value: data.participants[9].totalMinionsKilled + data.participants[4].neutralMinionsKilled},
        ];
    }
    else if(type === 'gold'){
        dataList=[
            {name:0, value: data.participants[5].goldEarned},
            {name:1, value: data.participants[6].goldEarned},
            {name:2, value: data.participants[7].goldEarned},
            {name:3, value: data.participants[8].goldEarned},
            {name:4, value: data.participants[9].goldEarned},
        ];
    }

    for(let i=0; i<dataList.length; i++){
        dataList[i].image = data.participants[i+5].championName;
    }
    
    return dataList;
}