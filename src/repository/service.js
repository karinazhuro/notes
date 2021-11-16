import notes from "../accets/notes.json";
import tags from "../accets/tags.json";

import {v4 as uuidv4} from 'uuid';

export default class Service {
	addNote = () => {
		const id = uuidv4();

		notes[id] = {
			id,
			title: "",
			text: "",
			tags: new Set(),
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

	editNote = (text, id, tagsSet) => {
		notes[id].text = text;
		tagsSet.forEach(tag => notes[id].tags.add(tag));

		return notes;
	};

	addTag = (tag) => {
		tags[tag] = new Set();

		return tags;
	};

	editTagsForNote = (id, tagsSet) => {
		tagsSet.forEach(tag => {
			if (tag in tags) tags[tag].add(id);
			else tags[tag] = new Set([id]);
		});

		notes[id].tags.forEach(tag => {
			if (!tagsSet.has(tag)) {
				tags[tag].delete(id);
			}

			if (tags[tag].size === 0) delete tags[tag];
		});

		notes[id].tags = tagsSet;

		return {
			notes,
			tags,
		};
	};

	removeTag = (id) => {
		delete tags[id]

		return tags;
	};
};