import Comment from "../comment/Comment";

export default function Comments(props) {
	let {items, selectComment} = props;
	console.log(items);
	return (
		<div>
			{
				items.map(c => <Comment key={c.id} item={c} selectComment={selectComment}/>)
			}
		</div>
	);
}