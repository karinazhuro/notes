import notes from "../accets/notes.json";
import tags from "../accets/tags.json";

import {v4 as uuidv4} from 'uuid';

export default class Service {
	addNote = () => {
		const id = uuidv4();

		notes[id] = {
			id,
			text: "",
		};

		return {
			notes,
			id,
		};
	};

	removeNote = (id) => {
		delete notes[id]

		return notes;
	};

	editNote = (text, id) => {
		notes[id].text = text;

		return notes;
	};

	addTag = (tag) => {
		const id = uuidv4();

		tags[id] = {
			id,
			text: `#${tag}`,
		};

		return tags;
	};

	removeTag = (id) => {
		delete tags[id]

		return tags;
	};


};