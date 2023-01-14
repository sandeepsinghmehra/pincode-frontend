import axios from 'axios';
export const baseURL = process.env.REACT_APP_BASE_API_URL;
// console.log("baseURL", baseURL);
const Api = axios.create({
    baseURL: baseURL
});
export default Api;