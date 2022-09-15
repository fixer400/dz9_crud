import { useState } from "react"
import { useNavigate } from "react-router-dom"


 function CreatePost(props){
  const [text, setText] = useState("")
  let navigate = useNavigate()

  function create(){
    const data = {"id": props.id, "content":text}
    fetch("http://localhost:7777/posts", {headers: {"Content-Type": "application/json",}, method:"POST", body:JSON.stringify(data)})
    if(props.id == 0){
      navigate("/", {replace:true})
    }
    else{
      navigate(0)
    }
    
  }

  return(
    <div className="create-post">
      <button className="create-post__btn" onClick={() => navigate("/", {replace:true})}>X</button>
      <textarea className="create-post__text" value={text} onChange = {((e) => setText(e.target.value))}/>
      <button onClick={create}>Сохранить</button>
    </div>
  )
};

CreatePost.defaultProps ={
  id:0
}

export default CreatePost