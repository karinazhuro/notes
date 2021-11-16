import {Component} from "react";

import Service from "../../repository/service";
import {Provider} from "../notes-service-context";

import Add from "../add";
import Tags from "../tags";
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
		this.onSelectTag = this.onSelectTag.bind(this);
		this.onEditFinishNote = this.onEditFinishNote.bind(this);
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
		const tagsSet = this.findTags(text);

		this.setState({
			notes: this.service.editNote(text, idChangeNote, tagsSet),
		});
	};

	onAddTag(tag) {
		if (tag === '') return;

		this.setState({
			tags: this.service.addTag(tag),
		})
	}

	onRemoveTag(key) {
		this.setState({
			tags: this.service.removeTag(key),
		});
	};

	onSelectTag(text) {
		const {idTag} = this.state;

		this.setState({
			idTag: text !== idTag ? text : null,
			isCheckTag: text !== idTag,
		});
	};

	findTags(text) {
		return new Set(text.split(' ').filter(word => word.startsWith('#') && word.length > 1).map(word => word.slice(1)))
	};

	onEditFinishNote(id, text) {
		this.editTagsForNote(id, this.findTags(text));
	};

	editTagsForNote(id, tagsSet) {
		const editTagsForNote = this.service.editTagsForNote(id, tagsSet);

		this.setState({
			notes: editTagsForNote.notes,
			tags: editTagsForNote.tags,
		})
	};

	sortNotesByTag(notes) {
		const {tags, idTag} = this.state;
		const collectNotes = {};

		if (!idTag) return notes;

		tags[idTag].forEach(tag => collectNotes[tag] = notes[tag]);

		return collectNotes;
	};

	render() {
		const {notes, tags, idTag, isCheckTag} = this.state;

		return (
			<div className="app">
				<header>
					<Add onAddNote={this.onAddNote}/>
				</header>
				<main>
					<Provider value={{
						idTag,
						isCheckTag,
						onRemoveNote: (key) => this.onRemoveNote(key),
						onEditNote: (text) => this.onEditNote(text),
						onAddTag: (tag) => this.onAddTag(tag),
						onRemoveTag: (key) => this.onRemoveTag(key),
						selectTag: (text) => this.onSelectTag(text),
						onEditFinishNote: (id, text) => this.onEditFinishNote(id, text),
					}}>
						<Tags tags={tags}/>
						<Notes notes={this.sortNotesByTag(notes)}/>
					</Provider>
				</main>
			</div>
		)
	}
};