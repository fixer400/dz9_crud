import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Post from "./Post"

export default function Main(){
  const [postsList, setPostList] = useState([])

  useEffect(() =>{
    fetch("http://localhost:7777/posts")
    .then(response => response.json())
    .then(data => setPostList(data))
  }, [])

  return(
    <div>
      <Link className="posts__create-link" to={"/posts/new"}>Создать пост</Link>
      <div className="posts">
        {postsList.map((e) => 
        <Link key = {e.id}  to={"/posts/" + e.id}>
          <Post 
            id = {e.id} 
            text = {e.content} 
            date = {e.created}/>
        </Link>)}
      </div>
    </div>
  )
}