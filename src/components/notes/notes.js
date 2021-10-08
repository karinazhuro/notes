import NoteItems from "../note-items";

import "./notes.scss";

const Notes = ({notes}) => {
	return (
		<div className="notes">
			{
				Object.values(notes).map(note => {
						const {id} = note;

						return <NoteItems key={id}
															note={note}/>
					}
				)
			}
		</div>
	);
};

export default Notes;