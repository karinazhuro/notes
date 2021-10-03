import {Component} from "react";

import NotesService from "../../repository/notesService";

import Add from "../add";
import Notes from "../notes";
import NoteDetail from "../note-detail";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
		};

		this.onAddNote = this.onAddNote.bind(this);
		this.onRemoveNote = this.onRemoveNote.bind(this);
		this.onEditNote = this.onEditNote.bind(this);
	}

	notesService = new NotesService();

	onAddNote() {
		const notes = this.notesService.addNote().notes;

		this.setState({
			notes,
		});
	};

	onRemoveNote(key) {
		const notes = this.notesService.removeNote(key).notes;

		this.setState({
			notes,
		});
	};

	onEditNote(text) {
		console.log(text)
		const notes = this.notesService.editNote(text).notes;

		this.setState({
			notes,
		})
	};

	onShowDetails(index) {
		// console.log(index)
	};

	render() {
		const {notes} = this.state;
		const showDetails = notes.length > 0 ? <NoteDetail onEditNote={this.onEditNote}/> : null;

		// console.log(notes)
		return (
			<div className="app">
				<Add onAddNote={this.onAddNote}/>
				<Notes notes={notes}
							 onRemoveNote={this.onRemoveNote}
							 onShowDetails={this.onShowDetails}
							 // onEditNote={this.onEditNote}
				/>
				{showDetails}
			</div>
		)
	}
};