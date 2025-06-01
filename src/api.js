import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/G0kwf5rBPZyWdFrayu8WysChwW35XP7H',
})

const api = {
    loadRestaurants: () => {
        return client.get('/restaurants').then(response => {
            return response.data;
        })
    }
}

export default api;