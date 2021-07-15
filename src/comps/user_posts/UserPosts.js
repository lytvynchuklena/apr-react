import {useEffect, useState} from "react";
import Post from "./../post/Post";

export default function UserPost({userId}) {

	let [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
			.then(value => value.json())
			.then(value => {
				setPosts(value);
			});
	}, []);
	return (
		<div>
			{
				posts.map((value, index) => <Post key={index} item={value}/>)
			}
		</div>
	);
}