import {Link} from "react-router-dom";

export default function Post({item}) {
	return (
		<div>
			{item.id} - {item.title}
			<div><Link to={`/posts/${item.id}/comments`}>
				<button type="button">comments page</button></Link></div>
		</div>
	);
}