import Simpson from "./components/simpson/Simpson";
import './App.css';
import Menu from "./components/menu/Menu";
import Simpsons from "./components/simpsons/Simpsons";

let simpsons = [
	{name: 'Bart', surname: 'Simpson', age: 10, info: 'Bart Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.', photo: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'},
	{name: 'Homer', surname: 'Simpson', age: 40, info: 'Homer Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.', photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'},
	{name: 'Marge', surname: 'Simpson', age: 38, info: 'Marge Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.', photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
	{name: 'Lisa', surname: 'Simpson', age: 9, info: 'Lisa Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.', photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'},
	{name: 'Maggie', surname: 'Simpson', age: 1, info: 'Maggie Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family.', photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
];

function App() {
	return (
		<div>
			<Menu/>
			<Simpsons items={simpsons}/>
		</div>
	);
}

export default App;