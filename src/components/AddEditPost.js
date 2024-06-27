import "../App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  TextContent,
  AddButton,
  Error,
} from "../styles/GlobalStyle";

class AddEditPost extends Component {
  state = { title: "", author: "", content: "", blogList: [], isError: false };

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

  getTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  getAuthor = (event) => {
    this.setState({ author: event.target.value });
  };

  getContent = (event) => {
    this.setState({ content: event.target.value });
  };

  saveBlogList = () => {
    const { blogList } = this.state;
    const filteredBlogList = blogList.filter((item) => item !== null); // Filter out null entries
    localStorage.setItem("blogList", JSON.stringify(filteredBlogList));
  };

  addOrEditPost = (event) => {
    event.preventDefault();
    const { title, author, content, blogList } = this.state;
    const isTitle = blogList.some((each) => each.title === title);
    const isAuthor = blogList.some((each) => each.author === author);
    if (title === "" || author === "" || content === "") {
      this.setState({ isError: true });
    } else if (isTitle && isAuthor) {
      this.setState(
        (prevState) => ({
          blogList: prevState.blogList.map((each) => {
            if (each.title === title) {
              return { ...each, content };
            }
            return each;
          }),
          title: "",
          author: "",
          content: "",
        }),
        this.saveBlogList
      );
    } else {
      const date = new Date().toISOString().split("T")[0];
      const addOrEditBlog = {
        id: uuidv4(),
        title,
        author,
        content,
        publicationDate: date,
      };
      this.setState(
        (preState) => ({
          blogList: [...preState.blogList, addOrEditBlog],
          title: "",
          author: "",
          content: "",
        }),
        this.saveBlogList
      );
    }
  };

  render() {
    const { title, author, content, blogList, isError } = this.state;
    console.log(blogList);
    return (
      <div className="app-container">
        <div className="all-container">
          <div className="top-section">
            <h1>Poditivity</h1>
            <Link to="/blogs">See All Posts</Link>
          </div>
          <p>Blogging platform</p>
          <p>
            Share, discover, and connect with inspiring narratives delivered
            right to you.
          </p>
          <Form onSubmit={this.addOrEditPost}>
            <h2>Add/Edit Blog Post</h2>
            <label>Title :</label>
            <Input
              type="text"
              onChange={this.getTitle}
              placeholder="Title"
              value={title}
            />
            <br />
            <label>Author :</label>
            <Input
              type="text"
              onChange={this.getAuthor}
              value={author}
              placeholder="Author"
            />
            <br />
            <label>Content :</label>
            <TextContent
              placeholder="Content"
              onChange={this.getContent}
              value={content}
            />
            <br />
            {isError && <Error>Please fill out all fields</Error>}
            <AddButton type="submit">Add</AddButton>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddEditPost;
