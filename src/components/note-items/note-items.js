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

		const titleNote = note ? `Note` : null;

		return (
			<div className="note"
					 key={note}
					 onClick={() => onShowDetails(note)}>
				<button onClick={() => onRemoveNote(note)}>-</button>
				<h4>{titleNote}</h4>
			</div>
		)
	}
};

// export default NoteItems;