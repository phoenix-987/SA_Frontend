import.meta.env.VITE_REACT_GET_URL;
import axios from "axios";
import { useState, useEffect } from "react";

const StudentDetails = () => {
	const [students, setStudents] = useState({ details: [] });

	useEffect(() => {
		getStudents();
	}, []);

	const getStudents = () => {
		let data;

		axios.get(import.meta.env.VITE_GET_URL).then((res) => {
			data = res.data;
			setStudents({ details: data });
		});
	};

	return students.details;
};

export default StudentDetails;
