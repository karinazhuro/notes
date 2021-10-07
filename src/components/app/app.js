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
			idTag: null,
			isCheckTag: false,
		};

		this.onAddNote = this.onAddNote.bind(this);
		this.onRemoveNote = this.onRemoveNote.bind(this);
		this.onEditNote = this.onEditNote.bind(this);
		this.onAddTag = this.onAddTag.bind(this);
		this.onRemoveTag = this.onRemoveTag.bind(this);
		this.selectTag = this.selectTag.bind(this);
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

	selectTag(id) {
		this.setState({
			idTag: id !== this.state.idTag ? id : this.state.idTag,
			isCheckTag: id !== this.state.idTag ? this.state.isCheckTag : !this.state.isCheckTag,
		});
	};

	sortNotesByTag() {

	};

	render() {
		const {notes, tags, idTag, isCheckTag} = this.state;

		return (
			<div className="app">
				<header>
					<Add onAddNote={this.onAddNote}/>
				</header>
				<main>
					<TagField tags={tags}
										onAddTag={this.onAddTag}
										onRemoveTag={this.onRemoveTag}
										selectTag={this.selectTag}
										idTag={idTag}
										isCheckTag={isCheckTag}/>
					<Notes notes={notes}
								 onRemoveNote={this.onRemoveNote}
								 onEditNote={this.onEditNote}/>
				</main>
			</div>
		)
	}
};