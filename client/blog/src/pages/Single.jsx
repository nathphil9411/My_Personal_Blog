import { Link } from "react-router-dom";
import Menu from "../components/menu";
const Single = () => {
	return (
		<div className="singlePage">
			<div className="content">
				<img src="" alt="pix" />
				<div className="user">
					<img src="" alt="writer profile picture" />
					<div className="info">
						<span>John</span>
						<p>Posted 1 day ago</p>
					</div>
					<div className="edit">
						<Link to={`/write?edit=2`}>
							<img src="" alt="edit" />
						</Link>
						<img src="" alt="delete" />
					</div>
				</div>
				<h1>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
					reiciendis fuga vero tempora ipsum, quae molestiae nesciunt doloribus
					.
				</h1>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
					consequatur libero porro dicta. Nesciunt rerum veniam perferendis.
					Perspiciatis culpa repudiandae ratione consequuntur. Ipsam eos
					repellat illo laborum consequatur inventore tempore! Molestias odio
					saepe rerum possimus beatae unde praesentium. Id corporis vitae beatae
					pariatur delectus inventore voluptatem saepe, eveniet numquam nisi
					consequuntur nam, ratione natus non, nesciunt dolores repudiandae?
					Porro, necessitatibus. Enim tenetur qui maxime optio explicabo harum,
					cumque sapiente natus totam? Voluptatum modi recusandae, dolores
					voluptatem suscipit ex cupiditate eligendi, reiciendis necessitatibus
					a exercitationem ipsum, placeat illum sapiente iure omnis. Nesciunt
					autem hic quos in amet ab possimus, dolor corporis quidem sit
					architecto, similique ipsum corrupti iusto? Fugiat eum aliquid fugit
					rerum reiciendis dolores numquam impedit eos cupiditate! Iure, beatae?
					Odit natus maiores voluptatum officia sequi nobis voluptas quas
					similique distinctio tempora autem, quidem dolores placeat fugiat
					praesentium, obcaecati facilis aperiam deserunt illum excepturi.
					Cupiditate eligendi non obcaecati aut magnam! Eos adipisci fugit
					facere reprehenderit hic? Optio sequi non doloribus facere suscipit
					dolor earum nam reiciendis exercitationem quae aut quo aliquid,
					perspiciatis minus eaque praesentium in voluptas ex molestiae ad?
					Quasi qui, eos iure minima repudiandae, reiciendis voluptate quo
					dolorum aut eveniet incidunt perferendis tempora optio. Molestiae,
					nihil hic! Minima animi vitae expedita iste! Hic dignissimos facere
					laudantium quasi id. Cupiditate, libero odio voluptas recusandae
					tempore reiciendis aspernatur? Quod, et tempora qui nam maiores dolore
					adipisci necessitatibus hic, pariatur ipsum debitis nihil dolorum,
					illum veritatis dolorem doloremque deserunt obcaecati! Assumenda?
					Iusto doloremque animi voluptas. Quisquam quam sequi corrupti quia
					totam vero animi aperiam, harum amet rerum iste magni sunt vitae ipsam
					ipsum! Fuga eligendi repellat cumque vel odit laborum eaque? Nemo,
					delectus itaque incidunt amet voluptatem perferendis? Laborum magnam
					necessitatibus in, accusamus eius omnis. Assumenda veniam laboriosam,
					maiores numquam excepturi dolore quos aliquam iusto quia accusantium!
					Quisquam minus quae dicta?
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default Single;
