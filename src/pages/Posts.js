import {useState} from 'react'
import { Link } from 'react-router-dom'
import postsData from '../data/postsData'

const Posts = () => {
  const [likes, setLikes] = useState(postsData.map(()=>false));
  const toggleLike = (index)=>{
    setLikes((prevLikes)=>
    prevLikes.map((like, i)=>(i===index ? !like : like)))
  }
  return (
    <div className='posts journalLayout'>
      <h2>기록 목록</h2>
      <ul>
        {postsData.map((post, index)=>(
          <li ket={post.id} className="postItem">
            <div className='postsCard'>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className='postMeta'>
                <button 
                className={
                  likes[index] ? "likeBtn liked" : "likeBtn"
                }
                onClick={()=>toggleLike(index)}
                >
                  <i class="bi bi-heart"></i> 
                  {likes[index]? "좋아요 취소" : "좋아요"}
                </button>
                <Link to={`/posts/${post.id}`}>더보기</Link>
              </div>
            </div>
          </li>
        ))}
        
      </ul>
    </div>
  )
}

export default Posts