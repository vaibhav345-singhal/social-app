import { createContext, useReducer } from "react";

export const PostListContext = createContext({ PostList: [], addPost: () => { }, deletePost: () => { } });


const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === 'ADD_POST') {
    newPostList = [action.payload.postObj, ...currentPostList];
  } else if (action.type === 'DELETE_POST') {

    newPostList = currentPostList.filter(item => item.id !== action.payload.id)

  }
  return newPostList;
}

const PostListContextProvider = ({ children }) => {
  const [PostList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (id, postTitle, postContent, postLikes, postTags) => {
    const postObj = {
      id: id,
      postTitle: postTitle,
      postContent: postContent,
      postLikes: postLikes,
      postTags: postTags.split(' ')
    }
    // console.log(postObj);
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        postObj
      }
    })
  }

  const deletePost = (id) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        id: id
      }
    })
  }

  return (
    <PostListContext.Provider value={{ PostList: PostList, addPost: addPost, deletePost: deletePost }}>
      {children}
    </PostListContext.Provider>
  )

}

export default PostListContextProvider;