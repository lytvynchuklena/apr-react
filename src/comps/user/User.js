import {Link} from 'react-router-dom';
import {useState} from "react";

export default function User({item}) {

	let [posts, setPosts] = useState([]);

	return (
		<div>
			{/*{item.name} - <Link to={'/users/' + item.id}>details</Link>*/}
			{item.name} - <Link to={
				{
					pathname: '/users/' + item.id,
					state: item
				}
			}>details</Link>

		</div>
	);
}