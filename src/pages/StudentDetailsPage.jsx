import StudentDetails from "../components/StudentDetails.jsx";


const StudentDetailsPage = () => {
    const studentDetails = StudentDetails();

    return (
        <div className={ "studentTable" }>
            <table id={ "students" }>
                <tr>
                    <th className={ "table-head" }>ID</th>
                    <th className={ "table-head" }>Name</th>
                    <th className={ "table-head" }>Age</th>
                    <th className={ "table-head" }>Address</th>
                    <th className={ "table-head" }></th>
                </tr>
                {studentDetails.map((student, id) => (
                    <tr key={ id }>
                        <td className={ "table-data" }>{student.id}</td>
                        <td className={ "table-data" }>{student.name}</td>
                        <td className={ "table-data" }>{student.age}</td>
                        <td className={ "table-data" }>{student.address}</td>
                        <td className={ "table-data" }>
                            <button className={ "button editButton" }>Edit</button>
                            <button className={ "button deleteButton" }>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default StudentDetailsPage;
