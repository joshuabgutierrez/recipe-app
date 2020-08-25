import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetchDetails = (uri) => {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	async function fetchData() {
		const response = await Axios.get(uri);
		setData(response.data);
		setLoading(false);
	}

	useEffect(
		() => {
			fetchData();
		},
		[ uri ]
	);

	return { data, loading };
};

export default useFetchDetails;
