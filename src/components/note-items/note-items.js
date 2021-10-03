import {Component} from "react";

export default class NoteItems extends Component {
	state = {};

	render() {
		const {
			note,
			index,
			onRemoveNote,
			onShowDetails
		} = this.props;

		console.log(note.note.length);

		const titleNote = note.note > 0 ? note.note : `Note ${index + 1}`;

		return (
			<div key={index}
					 className="note"
					 onClick={() => onShowDetails(index)}>
				<button onClick={() => onRemoveNote(index)}>-</button>
				<h4>{titleNote}</h4>
			</div>
		)
	}
};

// export default NoteItems;