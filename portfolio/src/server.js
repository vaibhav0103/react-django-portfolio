import axios from 'axios';

const baseURL= ' http://127.0.0.1:8000/';
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