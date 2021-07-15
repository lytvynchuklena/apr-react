import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Users from "./comps/users/Users";
import Posts from "./comps/posts/Posts";
import Comments from "./comps/comments/Comments";
import UserPosts from "./comps/user_posts/UserPosts";
import CommentPost from "./comps/comment_post/CommentPost";

export default function App() {


	return (
		<Router>
			<div>

				<div><Link to="/users">users page</Link></div>
				<div><Link to="/posts">posts page</Link></div>
				<div><Link to="/comments">comments page</Link></div>


				<Switch>
					<Route path={'/'} exact render={() => {
						return <div>Home page</div>
					}}/>

					<Route path={'/users/:userId/posts'} render={(props) => {
						return <UserPosts {...props.match.params}/>;
					}}/>

					<Route path={'/posts/:postId/comments'} render={(props) => {
						return <CommentPost {...props.match.params}/>;
					}}/>

					<Route path={'/users'} render={(props) => {
						console.log(props);
						return <Users/>;
					}}/>

					<Route path={'/posts'} render={(props) => {
						console.log(props);
						return <Posts/>;
					}}/>

					<Route path={'/comments'} render={(props) => {
						console.log(props);
						return <Comments/>;
					}}/>
				</Switch>

			</div>
		</Router>
	);
}