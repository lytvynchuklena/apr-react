export default function Comment(props) {
	let {item, selectComment} = props;
	return (
		<div>
			{item.id} - {item.name}
			-
			<button onClick={() => {
				selectComment(item.id);
			}}>click me</button>
		</div>
	);
}