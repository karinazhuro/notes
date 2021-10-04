import "./add.css";

const Add = ({onAddNote}) => {
	return (
		<div className="add">
			<button className="btn-add" onClick={onAddNote}>
				<span className="material-icons">note_add</span>
			</button>
		</div>
	)
};

export default Add;