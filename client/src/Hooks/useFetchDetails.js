import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetchDetails = (uri, equipmentUri) => {
	const [ data, setData ] = useState(null);
	const [ utensils, setUtensils ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	async function fetchData() {
		const response = await Axios.get(uri, {
			params: { includeNutrition: true, addRecipeInformation: true }
		});
		const secondResponse = await Axios.get(equipmentUri);

		setData(response.data);
		setUtensils(secondResponse.data.equipment);
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
