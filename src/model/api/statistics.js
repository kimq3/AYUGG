
export async function getChampion(){
    const response = await fetch('http://localhost:8100/kim/getdata');
    const data = await response.json();
    
    return await data;
}