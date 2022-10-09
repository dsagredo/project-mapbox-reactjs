import axios from 'axios';
import MapAPI from "../interface/Map.interface";

const getMap = async () => {
	const resp = await axios.get<MapAPI>(`${process.env.REACT_APP_API_URL}`);
	return resp;
};

export default getMap;