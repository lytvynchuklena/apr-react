import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import Users from "./comps/users/Users";

export default function App() {
	return (
		<Router>
			<div>
				<Link to={'/users'}>users page</Link>
			</div>

			<Switch>
				<Route path={'/users'} component={Users}/>

			</Switch>
		</Router>
	);
}