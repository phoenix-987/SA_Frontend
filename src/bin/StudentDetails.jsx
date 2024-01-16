import axios from "axios";
import { useState, useEffect } from "react";

const StudentDetails = () => {
	const [students, setStudents] = useState({ details: [] });

	useEffect(() => {
		getStudents();
	}, []);

	const getStudents = () => {
		let data;

		axios.get("http://localhost:8000/api/get/").then((res) => {
			data = res.data;
			setStudents({ details: data });
		});
	};

	return students.details;
};

export default StudentDetails;
