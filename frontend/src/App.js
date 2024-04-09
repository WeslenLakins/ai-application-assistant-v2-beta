import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NewPost from "./pages/NewPost";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import UpdatePost from "./pages/UpdatePost";
import Networking from "./pages/Networking";
import Services from "./pages/Services";
import NewResume from "./pages/NewResume";
import Resumes from "./pages/Resumes";
import Resume from "./pages/Resume";
import NewHeadshot from "./pages/NewHeadshot";
import Headshots from "./pages/Headshots";
import Headshot from "./pages/Headshot";
import Profile from "./pages/Profile";
import NewQuestion from "./pages/NewQuestion";
import Questions from "./pages/Questions";
import Question from "./pages/Question";
import NewScratchResume from "./pages/NewScratchResume";
import ScratchResumes from "./pages/ScratchResumes";
import ScratchResume from "./pages/ScratchResume";

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
						<Route path='/services' element={<Services />} />
						<Route path='/new-resume' element={<NewResume />} />
						<Route path='/resumes' element={<Resumes />} />
						<Route path='/resume/:id' element={<Resume />} />
						<Route path='/new-headshot' element={<NewHeadshot />} />
						<Route path='/headshots' element={<Headshots />} />
						<Route path='/headshot/:id' element={<Headshot />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/new-question' element={<NewQuestion />} />
						<Route path='/questions' element={<Questions />} />
						<Route path='/question/:id' element={<Question />} />
						<Route path='/new-scratch-resume' element={<NewScratchResume />} />
						<Route path='/scratch-resumes' element={<ScratchResumes />} />
						<Route path='/scratch-resume/:id' element={<ScratchResume />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
