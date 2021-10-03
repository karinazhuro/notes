import NoteItems from "../note-items";

import "./notes.css";

const Notes = ({notes, onRemoveNote, onShowDetails}) => {
	return (
		<div className="notes">
			{
				Object.keys(notes).map((note, index) => {
						return <NoteItems key={note}
															index={index}
															note={note}
															onRemoveNote={onRemoveNote}
															onShowDetails={onShowDetails}/>
					}
				)
			}
		</div>
	);
};

export default Notes;