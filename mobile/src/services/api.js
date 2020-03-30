import axios  from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.0.17:3333' //não dá para utilizar o localhost pq ele vai ser usado no cel
});


export default api;