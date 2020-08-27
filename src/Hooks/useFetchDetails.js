import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetchDetails = (uri, equipmentUri) => {
	const [ data, setData ] = useState(null);
	const [ utensils, setUtensils ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	async function fetchData() {
		const response = await Axios.get(uri);
		const secondResponse = await Axios.get(equipmentUri);
		setData(response.data);
		setUtensils(secondResponse);
		setLoading(false);
	}

	useEffect(
		() => {
			fetchData();
		},
		[ uri ]
	);

	return { data, utensils, loading };
};

export default useFetchDetails;
