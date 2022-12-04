import axios from 'axios';

const instance = axios.create({
    baseURL: '/hotels',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
    
});

export async function gethotel() {
    //await delay(1000);
    return (await instance.get()).data;
}

export async function gethotelById(id) {
    //await delay(1000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredhotels(type, manufacturer) {
    //await delay(1000);
    return (await instance.get(`/filters?stars=${type}&country=${manufacturer}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}