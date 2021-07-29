import axios from 'axios'

export const http = axios.create({ //cria const http com a baseURL
    baseURL: 'http://127.0.0.1:8000/api/v1/produto'
})