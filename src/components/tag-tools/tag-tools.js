import {Component} from "react";
import {Consumer} from "../notes-service-context";

import "./tag-tools.scss";

export default class TagTools extends Component {
	constructor(props) {
		super(props);
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
		const {tag} = this.state;

		return (
			<Consumer>
				{
					({onAddTag}) => {
						return (
							<div className="tag-tools">
								<input className="text-field"
											 placeholder="Typing tag..."
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
						)
					}}
			</Consumer>
		)
	}
};