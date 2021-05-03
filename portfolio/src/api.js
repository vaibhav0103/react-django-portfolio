import axios from 'axios';

const baseURL= 'https://api.football-data.org/v2/';

const apiInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_AUTH_KEY,
	}, 
});

export default apiInstance