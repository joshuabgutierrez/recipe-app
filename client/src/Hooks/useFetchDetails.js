import { useState, useEffect } from 'react';
import Axios from 'axios';

const useFetchDetails = (uri, equipmentUri, instructionsUri) => {
	const [ data, setData ] = useState(null);
	const [ utensils, setUtensils ] = useState(null);
	const [ instructions, setInstructions ] = useState(null);
	const [ loading, setLoading ] = useState(true);

	async function fetchData() {
		const response = await Axios.get(uri, {
			params: { includeNutrition: true }
		});
		const secondResponse = await Axios.get(equipmentUri);
		const thirdResponse = await Axios.get(instructionsUri, { params: { stepBreakdown: true } });

		setData(response.data);
		setUtensils(secondResponse.data.equipment);
		setInstructions(thirdResponse.data[0].steps);
		setLoading(false);
	}

	useEffect(
		() => {
			fetchData();
		},
		[ uri ]
	);

	return { data, utensils, instructions, loading };
};

export default useFetchDetails;
