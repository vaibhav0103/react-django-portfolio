import axios from 'axios';

const baseURL= process.env.REACT_APP_SERVER_BASE_URL;
// axios.defaults.withCredentials = true;

const serverInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default serverInstance