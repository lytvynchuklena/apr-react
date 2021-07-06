import User from "../user/User";

export default function Users(props) {
	let {items, selectUser} = props;

	return (
		<div>
			{
				items.map(u => <User key={u.id} item={u} selectUser={selectUser}/>)
			}
		</div>
	);
}