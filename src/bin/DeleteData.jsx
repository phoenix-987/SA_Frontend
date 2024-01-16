import axios from "axios";

const DeleteData = (id) => {
	axios.delete(import.meta.env.VITE_DELETE_URL + id);
	window.location.reload(true);
};

export default DeleteData;
