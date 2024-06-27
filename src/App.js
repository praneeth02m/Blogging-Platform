import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddEditPost from "./components/AddEditPost";
import BlogPostList from "./components/BlogPostList";
import BlogPost from "./components/BlogPost";

const App = () => (
  <Routes>
    <Route exact path="/" element={<AddEditPost />} />
    <Route exact path="/blogs" element={<BlogPostList />} />
    <Route exact path="/blogs/:id" element={<BlogPost />} />
  </Routes>
);

export default App;
