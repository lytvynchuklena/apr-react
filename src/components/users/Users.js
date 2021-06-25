import User from "../user/User";

export default function Users(props) {
	let {items} = props;
	console.log(items);
	return (
		<div>
			{
				items.map(u=><User item={u}/>)
			}
		</div>
	);
}