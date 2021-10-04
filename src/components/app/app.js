import {Component} from "react";

import NotesService from "../../repository/notesService";

import Add from "../add";
import Notes from "../notes";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: {},
			idChangeNote: "",
		};

		this.onAddNote = this.onAddNote.bind(this);
		this.onRemoveNote = this.onRemoveNote.bind(this);
		this.onEditNote = this.onEditNote.bind(this);
	}

	notesService = new NotesService();

	onAddNote() {
		const notes = this.notesService.addNote();

		this.setState({
			notes: notes.notes,
			idChangeNote: notes.id,
		});
	};

	onRemoveNote(key) {
		this.setState({
			notes: this.notesService.removeNote(key),
		});
	};

	onEditNote(text) {
		const {idChangeNote} = this.state;
		const notes = this.notesService.editNote(text, idChangeNote);

		this.setState({
			notes,
		});
	};


	render() {
		const {notes} = this.state;

		// console.log(notes);

		return (
			<div className="app">
				<Add onAddNote={this.onAddNote}/>
				<Notes notes={notes}
							 onRemoveNote={this.onRemoveNote}
							 onEditNote={this.onEditNote}/>
			</div>
		)
	}
};