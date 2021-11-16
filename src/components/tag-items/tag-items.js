import {Consumer} from "../notes-service-context";

import "./tag-items.scss";

const TagItems = ({tag}) => {
	return (
		<Consumer>
			{
				({idTag, isCheckTag, onRemoveTag, selectTag}) => {
					const tagItemsStyle = isCheckTag && idTag === tag ? 'tag-items-check' : '';

					return (
						<div className={`tag-items ${tagItemsStyle}`}
								 onClick={() => selectTag(tag)}>
							<p className="tag">#{tag}</p>
							<button className="btn-delete"
											onClick={() => onRemoveTag(tag)}>
								<span className="material-icons">highlight_off</span>
							</button>
						</div>
					)
				}}
		</Consumer>
	)
};

export default TagItems;

