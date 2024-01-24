import { Link } from "react-router-dom";
const Signup = () => {
	return (
		<div className="auth">
			<h1>SignUp</h1>
			<form>
				<input type="text" placeholder="firstname" />
				<input type="email" placeholder="jennyjackson@gmail.com" required />
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />
				<button>SignUp</button>
				<p>This is an error!</p>
				<span>
					Already have an account ? <Link to="/Login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Signup;
