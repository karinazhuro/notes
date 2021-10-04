import {Component} from "react";

import "./tag-field.scss";

export default class TagField extends Component {
	constructor() {
		super();
		this.state = {
			tags: "",
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			tags: e.target.value
		});
	};

	render() {
		const {onAddTag} = this.props;
		const {tags} = this.state;

		return (
			<div className="tag-field">
				<input id="tags"
							 onChange={this.handleChange}/>
				<button className="btn-tags"
								onClick={() => onAddTag(tags)}>
					<span className="material-icons">done</span>
				</button>
			</div>
		)
	}
};