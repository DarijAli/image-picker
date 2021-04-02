import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID yiMRBGb0a2KMiee2xxS_WBVT53j0Xllmo_gcNWsz0sg' 
    }
});