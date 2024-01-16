import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Create-post-store";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

const Posts = () => {

  const { PostList, fetching } = useContext(PostListContext);

  return (
    <div className="container">
      {fetching && <Loader />}
      {
        !fetching && PostList.length === 0 && <WelcomeMessage />
      }
      {!fetching &&
        PostList.map((item) => {
          return <Post key={item.id} item={item} />
        })
      }
    </div>

  )

}
export default Posts;