import axios from 'axios'


const req = axios.create({
    baseURL:"https://www.omdbapi.com/",
    timeout: 10000,
    params: {
        apikey:"a183460b"
    }
});

export {req}
