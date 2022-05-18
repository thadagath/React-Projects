import React from 'react';
import BlogCard from "./components/BlogCard";

export default class App extends React.Component{

    constructor(props){
       super(props);
       this.state= {
            blogs: [],
            blog: {
                    title: '',
                    body: '',
                    author: '',
                    category: ''
                },
        }
        this.onAdd = this.onAdd.bind(this);
        this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }    
    componentDidMount = () => {
      const getBlog = JSON.parse(localStorage.getItem("blogs"));
      this.setState({
          blogs: getBlog ? getBlog : []
        });
    };
    // componentDidUpdate = prevState => {
    //   if (prevState.blog !== this.state.blog && this.state.blog.title !== "" && this.state.blog.body !== "" && this.state.blog.author !== "" && this.state.blog.category !== "") {
    //     const updatedBlogs = [
    //       {
    //         id: new Date().getTime(),
    //         blog: this.state.blog
    //       },
    //       ...this.state.blogs
    //     ];
    //     this.setState({
    //       blogs: updatedBlogs
    //     });
    //     localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    //   }
    // };
  
   remove = id => {
    const newBlogs = this.state.blogs.filter(i => i.id !== id);
    this.setState({
      blogs: newBlogs,
    });
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
  };

  edit = (id) => {
    const newBlog = this.state.blogs.filter(i => i.id === id);
    this.remove(id);
    this.setState({
        blog :newBlog[0]
    });
  };
  handleChange = (e) => {
    this.setState({
      blog:{
        id: new Date().getTime(),
        ...this.state.blog,
        [e.currentTarget.name]:e.currentTarget.value
      }
      })
  }
  onAdd = (e) => {
    e.preventDefault();
    if(this.state.blog.title == "" || this.state.blog.body == "" || this.state.blog.author == "" ){
      alert("Please fill all the fields!")
    }else{
      this.setState({ 
        blogs: [...this.state.blogs, this.state.blog],
        blog: { title:'', body: '', author: '', category: ''},
});
const updatedBlogs=this.state.blogs;
localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
}
  }

    
  render(){
    const {title, body, author,category } = this.state.blog;

    return(
   <div className='container'>

   <div className='form'>
     <form onSubmit={this.onAdd}>
        <div>
        <div className='mheading'><b>TITLE :</b> </div>
       <input type="text" value={title} onChange={(e) => this.handleChange(e)} name={"title"} />
       </div>
       <div>
        <div className='mheading'><b>BODY :</b> </div>
        <div className='area'>
       <textarea rows={20} cols={55} value={body} onChange={(e) => this.handleChange(e)} name={"body"} />
       </div>
       </div>
       <div>
       <div className='mheading'><b>AUTHOR :</b> </div>
       <input type="text" value={author} onChange={(e) => this.handleChange(e)} name={"author"} />
       </div>
       <div>
        <span className='mheading'><b>CATEGORY :</b> </span>
        <div className='select-btn'>
        <select value={category} name={"category"} onChange={(e) => this.handleChange(e)}>
        <option>Select</option>
        <option>React</option>
        <option>JS</option>
        <option>CSS</option>
        <option>Other</option>
        </select>
        </div>
        </div>

       <button className='button-3 btn-add' type="submit">Add</button>
    </form>
    </div>
    {
      this.state.blogs.length>0?
      <div className='blogs-container'>
    <ul>
          {this.state.blogs.map((e,index) =>
            <div className='blog-container' key={e.id}>
                <h1>#Blog-{index+1}</h1>
                <BlogCard blog={e}/>
                <button className='button-3 btn-remove' onClick={() =>this.remove(e.id)}>Remove</button>
                <button className='button-3 btn-edit' onClick={() =>this.edit(e.id)}>Edit</button>
            </div>
          )}
    </ul>
    </div>
    :(<div className='blogs-container'>
            <div className='empty-container'>
              <h1>No Blogs Added! </h1>
            </div>
    </div>)
    }
   </div>
   );
  }
}
