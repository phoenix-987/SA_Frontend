import "./App.css";
import Header from "./components/Header.jsx";
import AddDataFormPage from "./pages/AddDataFormPage.jsx";
import StudentDetailsPage from "./pages/StudentDetailsPage.jsx";

function App() {
	return (
		<div>
			<Header />
			<br />
			<AddDataFormPage />
			<br />
			<StudentDetailsPage />
		</div>
	);
}

export default App;
