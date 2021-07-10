import {useEffect, useState} from "react";
import {getComments, getComment} from "./components/services/API";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/comment-details/CommentDetails";

export default function App() {

	let [comments, setComments] = useState([]);
	let [commentDetails, setCommentDetails] = useState(null);
	useEffect(() => {

		getComments().then(response => {
			setComments(response.data);
		});

	}, []);
	function selectComment(id) {
		console.log(id);
		getComment(id).then(({data}) => {

			setCommentDetails(data);
		});
	}
	return (
		<div>
			<Comments items={comments} selectComment={selectComment}/>
			<hr/>


			{
				commentDetails && <CommentDetails item={commentDetails}/>
			}

		</div>
	);
}