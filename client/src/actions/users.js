import axios from "axios";

export const getMessage = () => {
    return axios
    .get('/users/')
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        console.log(err);
        return "";
    })
};