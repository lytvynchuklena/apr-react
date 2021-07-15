import {Link} from "react-router-dom";

export default function User({item,}) {

	return (
		<div>
			{item.id} - {item.name}
			-
			<div><Link to={`/users/${item.id}/posts`}>
				<button type="button">comments page</button></Link></div>
		</div>
	);
}