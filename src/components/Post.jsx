import { useContext } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { PostListContext } from "../store/Create-post-store";
const Post = ({ item }) => {

  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card" key={item.id} style={{ width: "35rem", margin: '15px 15px' }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <RiChatDeleteFill style={{ cursor: 'pointer' }} onClick={() => { deletePost(item.id) }} />
      </span>
      <div className="card-body">
        <h5 className="card-title">{item.postTitle}</h5>
        <p className="card-text">{item.postContent}</p>
        {item.postTags.map((tags => <span key={tags} className="badge text-bg-primary" style={{margin:'2px'}}>{tags}</span>))}
        <div className="alert alert-info" role="alert" style={{margin:'15px 0 0 0'}}>
          This Post Got {item.postLikes} Likes.
        </div>
      </div>
    </div>
  )

}
export default Post;