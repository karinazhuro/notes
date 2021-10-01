import {Component} from "react";

import Notes from "../notes";
import NotesService from "../../repository/notesService";

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

	onEditNote(index, event) {
		const value = event.target.value;
		const notes = this.notesService.editNote(index, value).notes;

		console.log(notes);

		this.setState({
			notes,
		})
	};

	render() {
		const {notes} = this.state;
		console.log(notes)
		return <div className="app">
			<Notes notes={notes}
						 onAddNote={this.onAddNote}
						 onRemoveNote={this.onRemoveNote}
						 onEditNote={this.onEditNote}/>
		</div>
	}
};