import * as React from 'react';
import BlogApp from "./components/BlogApp";
import BlogCard from "./components/BlogCard";
import withStorage from "./services/withStorage";
import context from "./context";
import reactDOM from "react-dom";

const BlogAppWithStorage = withStorage(BlogApp);

export default class App extends React.Component{
    // titleRef = createRef();
    // bodyRef = createRef();
    // authorRef = createRef();
    // categoryRef = createRef();

    constructor(props){
       super(props);
       this.state= { 
            blog: {
                    title: '',
                    body: '',
                    author: '',
                    category: ''
                },
                vlog: {
                  title: '',
                  body: '',
                  author: '',
                  category: ''
              }
        }
        this.clearInputs = this.clearInputs.bind(this);
        this.onAdd = this.onAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    MyButton=({ editValue,mutateFn, label })=>{
      this.state.blog={editValue};
      return(<button onClick={mutateFn}>{label}</button>
      );
    }


    edit=()=> {
      return (
    <BlogsContext.Consumer>
      {value=>this.state.blog : {value.status}}
    </BlogsContext.Consumer>
      );
    }
    
    
    
    // var titlestr= this.state.blog.title.toString()
    // var x="\""+(titlestr)+ "\""
    // this.titleRef.current.value=x
    // this.bodyRef.current.value=""
    // this.authorRef.current.value=""
    // this.categoryRef.current.value=""
    // [e.target.title]=this.state.blog.title.toString()
    // [e.target.body]=this.state.blog.body.toString()
    // [e.target.author]=this.state.blog.author.toString()
    // [e.target.category]=this.state.blog.category.toString()
  

    handleChange = (e) => {
      this.setState({
        vlog:{
          ...this.state.vlog,
          [e.currentTarget.name]:e.currentTarget.value
        }
        })
    }
    
  onAdd = (e) => {
    e.preventDefault();
    this.setState({
      blog: this.state.vlog
    });
  }

  clearInputs = (e) => {
    e.preventDefault();
    this.setState({blog: { title:'', body: '', author: '',category: ''}});
    this.setState({vlog: { title:'', body: '', author: '',category: ''}});
  }

  render(){
    const {title, body, author,category } = this.state.vlog;

    return(
   <div>
     <form onSubmit={this.onAdd}>
        <div>
        <span>Title : </span>
       <input type="text" value={title} onChange={(e) => this.handleChange(e)} name={"title"} />
       </div>
       <div>
        <span>Body : </span>
       <textarea value={body} onChange={(e) => this.handleChange(e)} name={"body"} />
       </div>
       <div>
       <span>Author : </span>
       <input type="text" value={author} onChange={(e) => this.handleChange(e)} name={"author"} />
       </div>
       <div>
        <span>Category</span>
        <select value={category} name={"category"} onChange={(e) => this.handleChange(e)}>
        <option>Select</option>
        <option>React</option>
        <option>JS</option>
        <option>CSS</option>
        </select>
        </div>

       <button type="submit">Add</button>
       <button onClick={(e)=>this.clearInputs(e)}>Clear</button>

    </form>
    <BlogAppWithStorage blog={this.state.blog} MyButton={this.MyButton}>
        {({blogs,editBlog,remove,edit}) => (
          <ul>
          {blogs.map(({blog}) =>
            <li key={blog.id}>
                <BlogCard blog={blog}/>
                <button onClick={() =>remove(blog.id)}>Remove</button>
                <MyButton label="edit" mutateFn={edit} editvalue={editBlog}/>
            </li>
          )}
          </ul>
        )}
    </BlogAppWithStorage>

   </div>
   );
  }
}