import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="navBar">
			<div className="container">
				<div className="logo">
					<img src={logo} alt="logo" width="20px" height="20px" />
				</div>
				<div className="navLinks">
					<Link className="link" to="/?cat=backend">
						<h6>backend</h6>
					</Link>
					<Link className="link" to="/?cat=accessibility">
						<h6>accessibility</h6>
					</Link>
					<Link className="link" to="/?cat=AGILE">
						<h6>AGILE</h6>
					</Link>
					<Link className="link" to="/?cat=focus">
						<h6>focus</h6>
					</Link>
					<Link className="link" to="/?cat=Liesure">
						<h6>Liesure</h6>
					</Link>
					<span>Nath</span>
					<span>Logout</span>
					<span className="write">
						<Link className="link" to="/Write">
							write
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
