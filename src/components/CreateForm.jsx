import { useContext, useRef } from "react";
import { PostListContext } from "../store/Create-post-store";
import { v4 as uuidv4 } from 'uuid';


const CreateForm = () => {

  const { addPost } = useContext(PostListContext);

  const titleElement = useRef();

  const bodyElement = useRef();

  const likeElement = useRef();

  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = uuidv4();
    addPost(id, titleElement.current.value, bodyElement.current.value, likeElement.current.value, tagElement.current.value);


  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">Post Title</label>
          <input type="text" className="form-control" name="postTitle" id="postTitle" ref={titleElement} />
        </div>
        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">Post Content</label>
          <textarea className="form-control" name="postContent" id="postContent" rows="3" ref={bodyElement}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="like" className="form-label">Likes</label>
          <input type="number" className="form-control" name="like" id="like" ref={likeElement} />
        </div>
        <div className="mb-3">
          <label htmlFor="postTags" className="form-label">Post Tags</label>
          <input type="text" className="form-control" name="postTags" id="postTags" ref={tagElement} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}

export default CreateForm;