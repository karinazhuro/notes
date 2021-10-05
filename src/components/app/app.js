import {Component} from "react";

import Service from "../../repository/service";

import Add from "../add";
import TagField from "../tag-field";
import Notes from "../notes";

import "./app.scss";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			notes: {},
			tags: {},
			idChangeNote: "",
		};

		this.onAddNote = this.onAddNote.bind(this);
		this.onRemoveNote = this.onRemoveNote.bind(this);
		this.onEditNote = this.onEditNote.bind(this);
		this.onAddTag = this.onAddTag.bind(this);
		this.onRemoveTag = this.onRemoveTag.bind(this);
	}

	service = new Service();

	onAddNote() {
		const notes = this.service.addNote();

		this.setState({
			notes: notes.notes,
			idChangeNote: notes.id,
		});
	};

	onRemoveNote(key) {
		this.setState({
			notes: this.service.removeNote(key),
		});
	};

	onEditNote(text) {
		const {idChangeNote} = this.state;
		const notes = this.service.editNote(text, idChangeNote);

		this.setState({
			notes,
		});
	};

	onAddTag(tag) {
		this.setState({
			tags: this.service.addTag(tag)
		})
	}

	onRemoveTag(key) {
		this.setState({
			tags: this.service.removeTag(key),
		});
	};

	render() {
		const {notes, tags} = this.state;

		// console.log(tags);

		return (
			<div className="app">
				<header>
					<Add onAddNote={this.onAddNote}/>
				</header>
				<main>
					<TagField tags={tags}
										onAddTag={this.onAddTag}
										onRemoveTag={this.onRemoveTag}/>
					<Notes notes={notes}
								 onRemoveNote={this.onRemoveNote}
								 onEditNote={this.onEditNote}/>
				</main>
			</div>
		)
	}
};