import axios from 'axios';
import { useState, useEffect } from 'react';


const StudentDetails = () => {
    let [students, setStudents] = useState({details: []});
    // const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {getStudents()}, []);

    const getStudents = () => {
        let data;

        axios.get('http://localhost:8000/api/get/').then(
            res => {
                data = res.data;
                setStudents({details: data});
            }
        );
    }

    return students.details;
}

export default StudentDetails;
