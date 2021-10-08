import {Consumer} from "../notes-service-context";

import "./tag-items.scss";

const TagItems = ({tag}) => {
	const {id, text} = tag;

	return (
		<Consumer>
			{(onRemoveTag, selectTag, idTag, isCheckTag) => {
				const tagItemsStyle = isCheckTag && idTag === id ? 'tag-items-check' : '';

				return (
					<div className={`tag-items ${tagItemsStyle}`}
							 onClick={() => selectTag(id)}>
						<p className="tag">{text}</p>
						<button className="btn-delete"
										onClick={() => onRemoveTag(id)}>
							<span className="material-icons">highlight_off</span>
						</button>
					</div>

				)
			}}
		</Consumer>
	)
};

export default TagItems;