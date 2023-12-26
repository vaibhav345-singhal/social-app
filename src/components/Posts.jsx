import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Create-post-store";

const Posts = () => {

  const { PostList } = useContext(PostListContext);

  return (
    <div className="container">
      {PostList.map((item) => {
        return <Post key={item.id} item={item} />
      })}
    </div>

  )

}
export default Posts;