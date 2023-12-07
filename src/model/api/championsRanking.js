
export async function getChampion(){
    const response = await fetch('http://localhost:8100/park/getdata');
    const data = await response.json();
    
    return await data;
}

export async function postChampion(tier, line, ver){
    const response = await fetch('http://localhost:8100/park/getdata/po',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            info: {
                tier: tier,
                line: line,
                version: ver,
            }
        }),
    }).catch(error=>console.log('fetch에러사항: ',error));
    const data = await response.json();
    return await data;
}