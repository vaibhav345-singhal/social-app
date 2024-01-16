import { createContext, useEffect, useReducer, useState } from "react";
import Loader from "../components/Loader";

export const PostListContext = createContext(
  {
    PostList: [],
    addPost: () => { },
    deletePost: () => { },
    fetching: false
  }
);


const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === 'ADD_POST') {
    newPostList = [action.payload.postObj, ...currentPostList];
  } else if (action.type === 'ADD_INITIAL_POSTS') {
    newPostList = action.payload.postObj;
  } else if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(item => item.id !== action.payload.id)
  }
  return newPostList;
}

const PostListContextProvider = ({ children }) => {
  const [PostList, dispatchPostList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(resObj => {
        addInitialPosts(resObj.posts);
        setFetching(false);
      });


    return () => {
      controller.abort();
    }

  }, [dispatchPostList]);

  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        postObj: post
      }
    })
  }

  const addInitialPosts = (post) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: { postObj: post }
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
    <PostListContext.Provider value={
      {
        PostList: PostList,
        addPost: addPost,
        deletePost: deletePost,
        fetching: fetching
      }
    }
    >
      {children}
    </PostListContext.Provider>
  )

}

export default PostListContextProvider;