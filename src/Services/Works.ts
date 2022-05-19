import axios from "axios";
const BASE_URL = "api/"

export function getAllWorks():Promise<Works[] | void>{
    const url = BASE_URL + "works"
    return axios.get(url)
        .then(
            ({data}:{data:Works[]}):Works[] => {
                return data;
            }
            ,
            error => {
                console.warn(error)

            })
        .catch(error => {
            console.warn(error)
        });
}