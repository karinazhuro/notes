import TagTools from "../tag-tools";
import TagItems from "../tag-items";

import "./tags.scss";

const Tags = ({tags}) => {
	return (
		<div className="tags">
			<TagTools/>
			<div className="tags">
				{
					Object.keys(tags).map(tag => {
						return <TagItems key={tag}
														 tag={tag}/>
					})
				}
			</div>
		</div>
	)
};

export default Tags;