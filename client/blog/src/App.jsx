import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./style.scss";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/Write",
				element: <Write />,
			},
			{
				path: "/post/:id",
				element: <Single />,
			},
		],
	},
	{
		path: "/Signup",
		element: <Signup />,
	},

	{
		path: "/Login",
		element: <Login />,
	},
]);

function App() {
	return (
		<div className="app">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
