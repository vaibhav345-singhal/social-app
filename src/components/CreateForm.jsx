import { useContext, useRef } from "react";
import { PostListContext } from "../store/Create-post-store";
import { v4 as uuidv4 } from 'uuid';


const CreateForm = () => {

  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();

  const titleElement = useRef();

  const bodyElement = useRef();

  const likeElement = useRef();

  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const postObj = {
      id: userIdElement.current.value,
      title: titleElement.current.value,
      body: bodyElement.current.value,
      reactions: likeElement.current.value,
      tags: tagElement.current.value.split(",")
    }

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userIdElement.current.value,
        title: titleElement.current.value,
        body: bodyElement.current.value,
        reactions: likeElement.current.value,
        tags: tagElement.current.value.split(",")
      })
    })
      .then(res => res.json())
      .then(resObj => {
        console.log(resObj);
        addPost(resObj)
      });

    // addPost(postObj); 
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" className="form-control" name="userId" id="userId" ref={userIdElement} />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" name="title" id="title" ref={titleElement} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea className="form-control" name="body" id="body" rows="3" ref={bodyElement}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Likes</label>
          <input type="number" className="form-control" name="reactions" id="reactions" ref={likeElement} />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Post Tags</label>
          <input type="text" className="form-control" name="tags" id="tags" ref={tagElement} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}

export default CreateForm;