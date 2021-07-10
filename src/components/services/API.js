import axios from "axios";

let axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/comments',
});

const getComments = () => axiosInstance.get();
const getComment = (id) => axiosInstance.get('/' + id);

export {getComments, getComment};