import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Users from "./comps/users/Users";
import Posts from './comps/posts/Posts'
import Comments from "./comps/comments/Comments";

export default function App() {
	return (
		<Router>
			<div>
				<Route path={'/comments'}>
					<Comments/>
				</Route>

				<div><Link to="/">home page</Link></div>
				<div><Link to="/users">users page</Link></div>
				<div><Link to="/posts">posts page</Link></div>
				<div><Link to="/comments">comments page</Link></div>

				<Route path={'/'} exact render={() => {return <div>home</div>;}}/>

				<Route path={'/users'} render={(props) => {
					console.log(props);
					return <Users{...props} x={'ahhasdasj'}/>;
				}}/>

				<Route path={'/posts'} component={Posts}/>
				<Switch>
					<Route path={'/comments'}>
						<Comments/>
					</Route>
					<Route path={'/comments'}>
						<Comments/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}