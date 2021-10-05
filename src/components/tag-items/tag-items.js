import "./tag-items.scss";

const TagItems = ({tag, onRemoveTag}) => {
	return (
		<div className="tag-items">
			<p className="tag">{tag.text}</p>
			<button className="btn-delete"
							onClick={() => onRemoveTag(tag.id)}>
				<span className="material-icons">highlight_off</span>
			</button>
		</div>
	)
};

export default TagItems;