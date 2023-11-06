import { api_key, solo_rank_url } from "model/constantly/apiConstants";

export async function getRanker(){
    const response= await fetch(solo_rank_url+"?api_key="+api_key);
    if(!response.ok){
        Error('Failed request!');
    }
    return await response.json();
}