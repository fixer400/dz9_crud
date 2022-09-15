import './App.css';
import{Route, Routes, BrowserRouter} from'react-router-dom';
import Main from './Components/Main';
import CreatePost from './Components/CreatePost';
import PostPage from './Components/PostPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="page">
          <Routes>
            <Route path='/' element = {<Main/>}/>
            <Route path='/posts/new' element = {<CreatePost/>}/>
            <Route path='/posts/:postId' element = {<PostPage/>}/>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
