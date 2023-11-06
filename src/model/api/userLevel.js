import { summoner_url } from "model/constantly/apiConstants";

export async function getLevel(username){
    const response=await fetch(summoner_url+username);
    if(!response.ok){
        Error('Failed request!');
    }
    return await response.json();
}