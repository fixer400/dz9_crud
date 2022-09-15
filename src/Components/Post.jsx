import { Link } from "react-router-dom";

export default function Post(props){
  let date = new Date(props.date).toLocaleString()
  return(
      <div className="post">
        <div className="post__text">
          {props.text}
        </div>
        <div className="post__date">
          {date}
        </div>
      </div>
  )
}