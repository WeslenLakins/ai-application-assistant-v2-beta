import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NewPost from './pages/NewPost';
import Posts from './pages/Posts';
import Post from './pages/Post';
import UpdatePost from './pages/UpdatePost';
import Networking from './pages/Networking';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/new-post' element={<NewPost />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/edit/:id' element={<UpdatePost />} />
            <Route path='/networking' element={<Networking />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
