import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tuiobend.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api