import NoteItems from "../note-items";

import "./notes.scss";

const Notes = ({notes, onRemoveNote, onEditNote}) => {
	return (
		<div className="notes">
			{
				Object.values(notes).map(note => {
						const {id} = note;

						return <NoteItems key={id}
															note={note}
															onRemoveNote={onRemoveNote}
															onEditNote={onEditNote}/>
					}
				)
			}
		</div>
	);
};

export default Notes;