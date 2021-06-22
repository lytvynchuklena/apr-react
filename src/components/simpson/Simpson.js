import './Simpson.css';


export default function Simpson({item:{name, surname, age, info, photo}}) {

	let c1 = 'target';
	let c2 = 'point';
	let clsList = [c1,c2];
	let clsList2 = ['jack', 'black', 'door'];

	return (
		<div className={clsList.join(' ')}>
			<h2>{name} {surname}</h2>
			<img src={photo} alt=""/>
			<div>{info}</div>
		</div>
	);
}