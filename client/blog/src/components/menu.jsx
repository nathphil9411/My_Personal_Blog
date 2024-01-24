const Menu = () => {
	const posts = [
		{ id: 1, title: "ewu", desc: "ewu bia nkana", img: "jgdk" },
		{ id: 2, title: "ru", desc: "lorem	df", img: "jgdk" },
		{ id: 3, title: "nkita", desc: "nkita bia nkana", img: "jgdk" },
		{ id: 4, title: "oke", desc: "oke bia nkana", img: "jgdk" },
	];
	return (
		<div className="menu">
			<h1>Other posts you may like</h1>
			{posts.map((post) => (
				<div className="post" key={post.id}>
					<img src={post.img} alt="" />
					<h2>{post.title}</h2>
					<button>Read More</button>
				</div>
			))}
		</div>
	);
};
export default Menu;
