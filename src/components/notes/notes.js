import "./notes.css";
import NoteItems from "../note-items";

const Notes = ({notes, onRemoveNote, onShowDetails}) => {
	const renderNotes = () => {
		return notes.map((note, index) => <NoteItems key={index}
																								 note={note}
																								 index={index}
																								 onRemoveNote={onRemoveNote}
																								 onShowDetails={onShowDetails}/>
		)
	};

	return <div className="notes">
		{renderNotes()}
	</div>
};

export default Notes;