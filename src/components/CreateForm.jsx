import { useContext, useRef } from "react";
import { PostListContext } from "../store/Create-post-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreateForm = () => {

  // const { addPost } = useContext('PostListContext');

  return (
    <div className="container py-3 mx-2">
      <Form method="post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" className="form-control" name="userId" id="userId" />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" name="title" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea className="form-control" name="body" id="body" rows="3" ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Likes</label>
          <input type="number" className="form-control" name="reactions" id="reactions" />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Post Tags</label>
          <input type="text" className="form-control" name="tags" id="tags" />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </Form>
    </div>

  )
}

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(",");

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(resObj => {
      console.log(resObj);
      // addPost(resObj);
      // navigate("/");
      return redirect("/create-post");
    });
  return redirect("/create-post");
}

export default CreateForm;