import axios from 'axios';

const API=axios.create({baseURL: 'https://statxotestcase.onrender.com'});

export const getData=()=>{
    return API.get('/data');
}

export const updateData=(formData)=>{
    return API.post('/data',formData)
}

export const addData=(formData)=>{
    return API.post('/add',formData)
}
