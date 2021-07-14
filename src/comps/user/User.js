import {useEffect} from "react";

export default function User({item}) {


	return (
		<div>
			{item.id} - {item.name}
		</div>
	);
}