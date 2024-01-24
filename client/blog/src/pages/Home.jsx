import { Link } from "react-router-dom";

const Home = () => {
	const posts = [
		{ id: 1, title: "ewu", desc: "ewu bia nkana", img: "jgdk" },
		{ id: 2, title: "ru", desc: "lorem	df", img: "jgdk" },
		{ id: 3, title: "nkita", desc: "nkita bia nkana", img: "jgdk" },
		{ id: 4, title: "oke", desc: "oke bia nkana", img: "jgdk" },
	];
	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="img">
							<img src={post.img} alt="" />
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<button>Read More</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
