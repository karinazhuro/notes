import {Component} from "react";

import TagItems from "../tag-items";

import "./tag-field.scss";

export default class TagField extends Component {
	constructor() {
		super();
		this.state = {
			tag: "",
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			tag: e.target.value
		});
	};

	onClearTextField() {
		this.setState({
			tag: "",
		});

	};

	render() {
		const {tags, onAddTag} = this.props;
		const {tag} = this.state;

		return (
			<div className="tag-field">
				<div className="tag-tools">
					<input className="text-field"
								 placeholder="Typing..."
								 onChange={this.handleChange}
								 value={tag}/>
					<button className="btn-tags"
									onClick={() => {
										onAddTag(tag);
										this.onClearTextField();
									}}>
						<span className="material-icons">done</span>
					</button>
				</div>
				<div className="tags">
					{
						Object.values(tags).map(tag => {
							return <TagItems key={tag.id}
															 tag={tag}/>
						})
					}
				</div>
			</div>
		)
	}
};