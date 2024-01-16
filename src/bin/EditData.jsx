import axios from "axios";

const editData = (editedData) => {
	let response;

	console.log(editedData);

	try {
		axios.put(
			import.meta.env.VITE_PUT_URL + editedData.id,
			editedData
		);
		response = "Data updated successfully";
	} catch (error) {
		response = error;
	}
	return response;
};

export default editData;
