import {FC, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../store";
import Map, {Marker} from "react-map-gl";
import Pin from "./Pin";
import {fetchMap} from "../slices/mapSlice";
import MapAPI from "../interface/Map.interface";

const MapView: FC = () => {
	const [viewState, setViewState] = useState({
		longitude: -113.4909,
		latitude: 53.5444,
		zoom: 1
	});

	const dispatch = useAppDispatch();

	const {data} = useSelector((state: RootState) => state.data);

	useEffect(() => {
		dispatch(fetchMap());
	}, [dispatch]);

	const validateMap = () => {
		if (data instanceof Array) {
			return data.map((coord: MapAPI, i: number) => (
				<Marker key={`Marker-${i * (Math.random() * 200 + 1)}`} longitude={coord.longitude} latitude={coord.latitude} anchor="center">
					<Pin />
				</Marker>
			))
		}
	}

	return (
		<Map
			{...viewState}
			style={{width: "75vw", height: "85vh"}}
			onMove={evt => setViewState(evt.viewState)}
			mapStyle="mapbox://styles/mapbox/streets-v9"
			mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
		>
			{validateMap()}
		</Map>
	);
}

export default MapView;