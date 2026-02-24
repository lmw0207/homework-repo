import { Link, Route, Routes } from "react-router-dom";
import PostDetail from "./components/1-3-부록2/PostDetail";
import Home from "./components/1-3-부록2/Home";
import PostList from "./components/1-3-부록2/PostList";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
