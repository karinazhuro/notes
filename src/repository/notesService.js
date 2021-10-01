import notes from "../accets/notes.json";

export default class NotesService {
	addNote = () => {
		notes.notes.push("");

		return notes;
	};

	removeNote = (key) => {
		notes.notes.splice(key, 1);

		return notes;
	};

	editNote = (index, value) => {
		notes.notes[index] = value;

		return notes;
	};
};