import axios from 'axios';

const KEY = 'AIzaSyDi-sGXHPmuGrXMQhgQbCEChMx4y1iNFpo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});