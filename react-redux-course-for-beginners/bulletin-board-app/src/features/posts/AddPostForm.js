import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content));
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent"> content:</label>
        <textarea
          id="postContent"
          name="postConent"
          value={content}
          onChange={onContentChanged}
        />
        <button onClick={onSavePostClicked} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
