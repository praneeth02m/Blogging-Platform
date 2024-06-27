import { Component } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

import "../App.css";

import {
  AllBlogsDiv,
  AllDiv,
  BlogPostsList,
  BlogPost,
} from "../styles/GlobalStyle";

class BlogPostList extends Component {
  state = { blogList: [] };

  componentDidMount() {
    this.getSavedBlogList();
  }

  getSavedBlogList = () => {
    const stringifiedBlogList = localStorage.getItem("blogList");
    const parsedBlogList = JSON.parse(stringifiedBlogList);
    if (parsedBlogList === null) {
      console.log("empty");
    } else {
      this.setState({ blogList: parsedBlogList });
    }
  };

  saveBlogList = () => {
    const { blogList } = this.state;
    const filteredBlogList = blogList.filter((item) => item !== null); // Filter out null entries
    localStorage.setItem("blogList", JSON.stringify(filteredBlogList));
  };

  deletePostFun = (id) => {
    this.setState(
      (preState) => ({
        blogList: [...preState.blogList.filter((each) => each.id !== id)],
      }),
      this.saveBlogList
    );
  };

  render() {
    const { blogList } = this.state;
    if (blogList.length >= 1) {
      return (
        <AllBlogsDiv>
          <AllDiv>
            <h1>All Blog Posts</h1>
            <BlogPostsList>
              {blogList.map((each) => {
                const { title, author, id } = each;
                const deletePost = () => {
                  this.deletePostFun(id);
                };
                return (
                  <BlogPost key={each.id}>
                    <IoCloseCircleOutline
                      className="delete"
                      onClick={deletePost}
                    />
                    <Link to={`/blogs/${id}`} className="link-style">
                      <h1 className="blog-title">{title}</h1>
                      <p>{author}</p>
                      <p>Read More</p>
                    </Link>
                  </BlogPost>
                );
              })}
            </BlogPostsList>
          </AllDiv>
        </AllBlogsDiv>
      );
    }
    return (
      <AllBlogsDiv>
        <AllDiv>
          <h1>There are no Blogs</h1>
        </AllDiv>
      </AllBlogsDiv>
    );
  }
}

export default BlogPostList;
