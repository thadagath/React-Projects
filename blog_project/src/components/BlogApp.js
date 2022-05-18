import {Component} from "react";
import BlogsContext from "./context";
import reactDOM from "react-dom";


class BlogApp extends Component {
  state= { 
    blogs: [],
    editBlog:null
};

  componentDidMount = () => {
    const getBlog = this.props.read && this.props.read("blogs");
    this.setState({
        blogs: getBlog ? getBlog : []
      });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.blog !== this.props.blog && this.props.blog.title !== "" && this.props.blog.body !== "" && this.props.blog.author !== "" && this.props.blog.category !== "") {
      const updatedBlogs = [
        {
          id: new Date().getTime(),
          blog: this.props.blog
        },
        ...this.state.blogs
      ];
      this.setState({
        blogs: updatedBlogs
      });
      this.props.save && this.props.save("blogs", updatedBlogs);
    }
  };

  edit = (id) => {
    const newBlog = this.state.blogs.filter(i => i.id === id);
    this.remove(id);
    this.setState({
      editBlog: newBlog[0]
    });
  };

  remove = id => {
    const newBlogs = this.state.blogs.filter(i => i.id !== id);
    this.setState({
      blogs: newBlogs
    });
    this.props.save && this.props.save("blogs", newBlogs);
  };
  // render = () =>
  //   this.props.children({blogs:this.state.blogs,editBlog:this.state.editBlog, remove:this.remove, edit: this.edit});
  render(){
    return(
    <div>
      
    </div>

    );
  }
}

export default BlogApp;
