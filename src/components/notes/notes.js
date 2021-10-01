const Notes = ({notes, onAddNote, onRemoveNote, onEditNote}) => {
	const renderNotes = () => {
		return notes.map((note, index) => {
			return (
				<div key={index}
						 className="note">
					<div>
						<button onClick={() => onRemoveNote(index)}>-</button>
						{/*<button onClick={onRemoveNote}>edit</button>*/}
					</div>
					<textarea onChange={(event) => onEditNote(index, event)}/>
				</div>
			)
		})
	};

	return <div className="notes">
		<button onClick={onAddNote}>+</button>
		{renderNotes()}
	</div>
};

export default Notes;