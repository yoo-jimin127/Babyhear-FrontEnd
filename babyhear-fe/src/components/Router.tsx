import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import VideoCuration from '../pages/VideoCuration';
import VideoDetail from '../pages/VideoDetail';
import Community from '../pages/Community';
import Post from '../pages/Post';
import PostList from '../pages/PostList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video-curation" element={<VideoCuration />} />
        <Route path="/video-detail/:videoId" element={<VideoDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community-list/:listId" element={<PostList />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
