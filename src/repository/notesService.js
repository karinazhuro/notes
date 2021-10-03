import notes from "../accets/notes.json";

export default class NotesService {
	addNote = () => {
		notes.notes.push({
			title: "",
			note: "",
		});

		return notes;
	};

	removeNote = (key) => {
		notes.notes.splice(key, 1);

		return notes;
	};

	editNote = (index, text) => {

		notes.notes[index].note = text;

		return notes;
	};
};