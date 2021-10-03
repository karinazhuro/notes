const NoteDetail = ({onEditNote}) => {
	return (
		<div className="note-detail">
			<textarea onChange={(event) =>
				onEditNote(event.target.value)}/>
		</div>
	)
};

export default NoteDetail;