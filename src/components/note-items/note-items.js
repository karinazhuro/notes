import {Component} from "react";

import "./note-items.scss";
import {Consumer} from "../notes-service-context";

export default class NoteItems extends Component {
	constructor() {
		super();
		this.state = {
			isShow: true,
		};

		this.onShowDetails = this.onShowDetails.bind(this);
	}

	onShowDetails() {
		this.setState({
			isShow: !this.state.isShow,
		});
	};

	render() {
		const {note} = this.props;
		const rotate = this.state.isShow ? '0' : '180';
		const display = this.state.isShow ? 'block' : 'none';

		const showHideNoteStyle = {
			transform: `rotate(${rotate}deg)`,
		};

		const textareaStyle = {
			display: display,
		};

		return (
			<Consumer>
				{
					({onRemoveNote, onEditNote, onEditFinishNote}) => {
						return (
							<div className="note"
									 key={note}>
								<div className="tools">
									<input className="note-title"
												 type="text"
												 placeholder="Title..."
												 defaultValue={note.title}/>
									<button className="show-hide-note"
													onClick={this.onShowDetails}
													style={showHideNoteStyle}>
										<span className="material-icons">expand_more</span>
									</button>
									<button className="btn-delete"
													onClick={() => onRemoveNote(note.id)}>
										<span className="material-icons">delete_outline</span>
									</button>
								</div>
								<textarea className="textarea"
													cols="30" rows="15"
													defaultValue={note.text}
													onChange={(e) => onEditNote(e.target.value)}
													onBlur={(e) => onEditFinishNote(note.id, e.target.value)}
													style={textareaStyle}>
							</textarea>
							</div>
						)
					}}
			</Consumer>
		)
	}
};