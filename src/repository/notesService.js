import notes from "../accets/notes.json";

import {v4 as uuidv4} from 'uuid';

export default class NotesService {
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
};