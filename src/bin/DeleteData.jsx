import axios from "axios";

const DeleteData = (id) =>{
    axios.delete('http://localhost:8000/api/delete/?id='+id);
    window.location.reload(true);
}

export default DeleteData;