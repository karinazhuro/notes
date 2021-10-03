import notes from "../accets/notes.json";

import {v4 as uuidv4} from 'uuid';

export default class NotesService {
	addNote = () => {
		const id = uuidv4();

		notes[id] = {
			id,
			title: "",
			note: "",
		}

		return notes;
	};

	removeNote = (id) => {
		delete notes[id]

		return notes;
	};

	editNote = (index, text) => {

		notes.notes[index].note = text;

		return notes;
	};
};