import editData from "../bin/EditData";

const EditDataPage = (students) => {
	const changes = {
		id: students.students.id,
		name: students.students.name,
		age: students.students.age,
		address: students.students.address,
	};

	const handleChange = (e) => {
		changes[e.target.id] = e.target.value;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(changes);
		editData(changes);
		window.location.reload(true);
	};

	return (
		<div>
			<h1>Edit Data</h1>
			<div className="editDataPage">
				<form>
					<label>ID</label>
					<br />
					<input
						type="text"
						id="id"
						value={students.students.id}
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<label>Name</label>
					<br />
					<input
						type="text"
						id="name"
						defaultValue={students.students.name}
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<label>Age</label>
					<br />
					<input
						type="text"
						id="age"
						defaultValue={students.students.age}
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<label>Address</label>
					<br />
					<input
						type="text"
						id="address"
						defaultValue={students.students.address}
						onChange={(e) => handleChange(e)}
					/>
					<br />
					<br />
					<input
						type="submit"
						value="Update Changes"
						onClick={(e) => {
							handleSubmit(e);
						}}
					/>
				</form>
			</div>
		</div>
	);
};

export default EditDataPage;
