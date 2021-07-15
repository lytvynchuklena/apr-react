import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function CommentPost({postId}) {

	let [comments, setComments] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
			.then(value => value.json())
			.then(value => {
				setComments(value);
			});
	}, []);
	return (
		<div>
			{
				comments.map((value, index) => <Comment key={index} item={value}/>)
			}
		</div>
	);
}