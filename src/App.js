import {useEffect, useState} from "react";
import {getUsers, getUser} from "./components/services/API";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";

export default function App() {

	let [users, setUsers] = useState([]);

	let [userDetails, setUserDetails] = useState(null);

	useEffect(() => {

		getUsers().then(response => {

			setUsers(response.data);
		});


	}, []);

	function selectUser(id) {
		console.log(id);
		getUser(id).then(({data}) => {
			setUserDetails(data);
		});
	}

	return (
		<div>
			<Users items={users} selectUser={selectUser}/>
			<hr/>
			{

				userDetails && <UserDetails item={userDetails}/>
			}
		</div>
	);
}