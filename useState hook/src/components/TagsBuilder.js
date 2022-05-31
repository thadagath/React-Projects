import React, {createRef} from "react";

const TagsBuilder = ({tags, addTags}) => {
  const inputRef = createRef();
  const addTagsHandler = e => {
    if (e.keyCode === 13 && e.target.value !== "") {
      addTags(e.target.value);
      inputRef.current.value = "";
    }
  };
  return (
    <div className="tag-builder">
      <input
        type="text"
        ref={inputRef}
        onKeyUp={addTagsHandler}
        placeholder="Type in tags and press enter..."
      />
      <div className="tags-display">
        {tags &&
          tags.map(({id, title}) => (
            <div className="tag" key={id}>
              {title}
            </div>
          ))}
      </div>
    </div>
  );
};

TagsBuilder.defaultProps = {
  tags: [],
  addTags: () => {}
};

export default TagsBuilder;
