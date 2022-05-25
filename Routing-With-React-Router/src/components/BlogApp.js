import {useState,useEffect} from "react";
import BlogCard from "./BlogCard";


BlogApp=({blog})=>{

[blogs,setBlogs]=useState([]);

  useEffect = () => {
    const getBlog = JSON.parse(localStorage.getItem('blogs'));
      setBlogs(getBlog ? getBlog : [])
  };

  useEffect((blog) => {
    const updatedBlogs = [
      {
        id: new Date().getTime(),
        blog
      },
      ...blogs
    ];
    setBlogs(updatedBlogs)
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
  }, [blog]);

  // componentDidUpdate = prevProps => {
  //   if (prevProps.blog !== this.props.blog && this.props.blog.title !== "" && this.props.blog.body !== "" && this.props.blog.author !== "" && this.props.blog.category !== "") {
  //     const updatedBlogs = [
  //       {
  //         id: new Date().getTime(),
  //         blog: this.props.blog
  //       },
  //       ...this.state.blogs
  //     ];
  //     this.setState({
  //       blogs: updatedBlogs
  //     });
  //     this.props.save && this.props.save("blogs", updatedBlogs);
  //   }
  // };

  // edit = (id) => {
  //   const newBlog = this.state.blogs.filter(i => i.id === id);
  //   this.remove(id);
  //   this.setState({
  //     editBlog: newBlog[0]
  //   });
  // };

  remove = id => {
    const newBlogs = blogs.filter(i => i.id !== id);
    setBlogs(newBlogs);
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
  };

    return(
      blogs.length > 0 ? (
        <div className="blogs-container">
          <ul>{
            blogs.map((e, index) => (
              <div className="blog-container" key={e.id}>
                <h1>#Blog-{index + 1}</h1>
                <BlogCard blog={e} />
                <button
                  className="button-3 btn-remove"
                  onClick={() => this.remove(e.id)}
                >
                  Remove
                </button>
                <button
                  className="button-3 btn-edit"
                  onClick={() => this.edit(e.id)}
                >
                  Edit
                </button>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className="blogs-container">
          <div className="empty-container">
            <h1>No Blogs Added! </h1>
          </div>
        </div>
      )
    );
      }
  
    // this.props.children({blogs:this.state.blogs,editBlog:this.state.editBlog, remove:this.remove, edit: this.edit});
export default BlogApp;
