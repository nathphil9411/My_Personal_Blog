import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
	const [value, setValue] = useState("");
	return (
		<div className="writepage">
			<div className="content">
				<input type="text" placeholder="Title" />
				<div className="editorContainer">
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>
			<div className="menu">
				<div className="item">
					<h1>Publish</h1>

					<span>
						<b>Satus: </b> Draft{" "}
					</span>
					<span>
						<b>Visibility : </b> Public{" "}
					</span>
					<input
						style={{ display: "none" }}
						type="file"
						name="upload image"
						id="uploadImage"
					/>
					<label className="file" htmlFor="uploadImage">
						Upload Image
					</label>
					<div className="buttons">
						<button>Save as a Draft</button>
						<button>Update</button>
					</div>
				</div>
				<div className="item">
					<h1>Category</h1>
					<div className="cat">
						<input type="radio" name="cat" value={`backend`} id="backend" />
						<label htmlFor="backend">Backend</label>
					</div>
					<div className="cat">
						<input
							type="radio"
							name="cat"
							value={`accessibilty`}
							id="accessibilty"
						/>
						<label htmlFor="accessibilty">Accessibilty</label>
					</div>
					<div className="cat">
						<input type="radio" name="cat" value={`agile`} id="agile" />
						<label htmlFor="agile">AGILE</label>
					</div>
					<div className="cat">
						<input type="radio" name="cat" value={`focus`} id="focus" />
						<label htmlFor="focus">Focus</label>
					</div>
					<div className="cat">
						<input type="radio" name="cat" value={`liesure`} id="Liesure" />
						<label htmlFor="liesure">Liesure</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Write;
