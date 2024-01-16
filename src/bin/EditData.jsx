import axios from "axios";

const editData = (editedData) => {
	let response;

	console.log(editedData);

	try {
		axios.put(
			"http://localhost:8000/api/put/?id=" + editedData.id,
			editedData
		);
		response = "Data updated successfully";
	} catch (error) {
		response = error;
	}
	return response;
};

export default editData;
