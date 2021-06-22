import React from "react";
import './Post.css';
export default function Post({item:{userId, id, title, body}}) {
	return (
		<div>
			<h2 className={}>{userId} {id}</h2>
			<div>{title}</div>
			<div>{body}</div>
		</div>
	);
}