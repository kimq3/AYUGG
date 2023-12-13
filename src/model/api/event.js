export async function postEvent(month){
    const response = await fetch('http://localhost:8100/kim/getdata/event',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            info: {
                month: month,
            }
        }),
    }).catch(error=>console.log('fetch에러사항:',error));
    const data = await response.json();
    console.log(data);
    return await data;
}