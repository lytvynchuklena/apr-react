import A from "./A";
import {MyContext} from "./index";

export default function App() {

	return (
		<MyContext.Provider value={'hello'}>
			<div>
				<A/>

			</div>
		</MyContext.Provider>

	);
}