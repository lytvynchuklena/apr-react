import React from "react";
import './Post.css';
export default function Post({item:{userId, id, title, body}}) {
	return (
		<div>
			<h2 className={'cl_post'}>{userId} {id}</h2>
			<div className={'cl_post2'}>{title}</div>
			<div className={'cl_post3'}>{body}</div>
		</div>
	);
}