import axios from "axios";
import {useState} from "react";

const AddDataFormPage = () => {

    const [sid, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const [isVisible, setIsVisible] = useState(false);

    const handleIDChange = (e) => {
        setId(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postStudent();
        // console.log(e);
        setIsVisible(false)
        window.location.reload(true);
    }

    const postStudent = () => {
        axios.post('http://localhost:8000/api/post/', {
            'id': sid,
            'name': name,
            'age': age,
            'address': address
        })
    }

    return (
    <div>
        <div>
            <button className= "addButton" onClick={() => {
                let state = !isVisible;
                setIsVisible(state);
            }}>
            <img width="24" height="24" src="https://img.icons8.com/color/24/add--v1.png" alt="add--v1"/>
            </button>
        </div>

        {isVisible && <div className="addDataForm">
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <h3>Add Student Details</h3>
                <label>ID</label>
                <br/>
                <input type="text" value={sid} required onChange={(e) => {handleIDChange    (e)}} />
                <br/>
                <label>Name</label>
                <br/>
                <input type="text" value={name} required onChange={(e) => {handleNameChange (e)}} />
                <br/>
                <label>Age</label>
                <br/>
                <input type="text" value={age} required onChange={(e) => {handleAgeChange   (e)}} />
                <br/>
                <label>Address</label>
                <br/>
                <input type="text" value={address} required onChange={(e) =>    {handleAddressChange(e)}} />
                <br/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        }
    </div>
    );
}

export default AddDataFormPage;
