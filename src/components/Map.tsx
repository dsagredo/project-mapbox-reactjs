import {FC, useEffect, useState} from "react";
import axios from 'axios';
import Map, {Marker} from "react-map-gl";
import Pin from "./Pin";
import MapAPI from "../interface/Map.interface";

const MapView: FC = () => {
	const [viewState, setViewState] = useState({
		longitude: -113.4909,
		latitude: 53.5444,
		zoom: 1
	});
	
	const [data, setData] = useState<MapAPI[]>([]);

	const getMap = async () => {
		const { data } = await axios.get<MapAPI[]>(
		  `${process.env.REACT_APP_API_URL}`
		);
		setData(data);
	  };



	useEffect(() => {
		getMap();
	}, []);

	return (
		<Map
			{...viewState}
			style={{width: "75vw", height: "85vh"}}
			onMove={evt => setViewState(evt.viewState)}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
		>
			{data && data.map((coord: MapAPI, i: number) => (
				<Marker key={`Marker-${i * (Math.random() * 200 + 1)}`} longitude={coord.longitude} latitude={coord.latitude} anchor="center">
					<Pin />
				</Marker>)
			)}
		</Map>
	);
}

export default MapView;