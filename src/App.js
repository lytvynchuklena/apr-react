import {useState} from "react";


export default function App() {


	// let asd = {
	// 	id: 1,
	// 	name: 'Ivan',
	// 	address: {city: 'Lviv', street: 'Svoboda', number: 18}
	// };
	// console.log(asd.address);
	// console.log(asd.address.city);
	// console.log(asd.street);
	// console.log(asd.number);
	//
	//
	// let {id, name, address:{city, street, number}} = asd; // id=1 -> name = ivan
	//
	// let x = 100;
	// let y = 200;
	// let coord = {x, y};

	// function a() {
	//
	// }
	// let b = () => {};

	// let i = 0;

let [i, setI] = useState(0);

	return (
		// <div>
		// 	<button onClick={function (){
		// 		a();
		// 		b();
		// 	}}>click me</button>
		// </div>
		<div>
			<button onClick={() => {
				setI(++i);
				console.log(i);
			}}> increment {i} </button>
		</div>
	);
}