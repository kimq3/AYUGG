export async function postChampion(tier, line){
    const response = await fetch('http://localhost:8100/kim/getdata/po',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            info: {
                tier: tier,
                line: line,
            }
        }),
    }).catch(error=>console.log('fetch에러사항:',error));
    const data = await response.json();
    return await data;
}