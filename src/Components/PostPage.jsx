import { useEffect, useState } from "react"
import { useParams,useNavigate, Link } from "react-router-dom"
import CreatePost from "./CreatePost"
import EditPost from "./EditPost"
import Post from "./Post"

export default function PostPage(){
  const [post, setPost] = useState()
  const [editMode, setEdit] = useState(false)
  const {postId} = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    const ac = new AbortController()
    
    try {
      fetch("http://localhost:7777/posts")
      .then(response => {
        if(response.ok){
         return response.json()
        }
        throw new Error('При загрузке страницы что-то пошло не так :(')
      })
      .then(data => setPost(...data.filter((e) => (e.id == postId))))
      .catch(error => console.log(error))
    }
    catch(err){
      console.log(err)
    }
      
    return () => {
      ac.abort()
    }
  }, [])

  function deleteThis(){
    fetch("http://localhost:7777/posts/" + postId, {
      method : "DELETE",
    })
    navigate("/", {replace:true})
  }

  function editThis(){
    setEdit(!editMode)
  }

  return(
    
    <div className="post-page">
      {post ? 
        <div>
          {editMode == false ? 
          <div>
            <button onClick={() => navigate("/")}>На главную страницу</button>
            <Post 
              id = {post.id} 
              text = {post.content} 
              date = {post.created}
            />
            <div className="post-page__footer">
              <button onClick={editThis}>Изменить</button>
              <button onClick={deleteThis}>Удалить</button>
            </div>
          </div>
          :
          <CreatePost id = {post.id}/>
          }
        </div>
        :
        <div className="loading">
          loading
        </div>
      }
    </div>
  )
}