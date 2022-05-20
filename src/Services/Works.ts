import axios from "axios";

/**
 * BASE_URL - the route to api services
 * @enum {string}
 */
const BASE_URL = "api/"

/**
 * getAllWorks
 * @returns {Promise<Array<Works>|void>} - it returns a promise containing the result of get request to server
 */
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