import React from "react";
import BlogCard from "./components/BlogCard";

class App extends React.Component {

    constructor(props){
       super(props);
       this.state= { 
                    blogs: [],
                    blog: {
                            title: '',
                            body: '',
                            author: '',
                            category:''
                    }
         }
    }

//   removeAccount = (i:number) => {
//     let users = [...this.state.users];
//     users.splice(i,1);
//     this.setState({users},()=>{console.log('setting the data')});
//   }

  changeHandler = (e) => {
    this.setState({
      blog:{
        ...this.state.blog,
        [e.currentTarget.name]:e.currentTarget.value
      }
      })
  }

  onAdd = (e) => {
    e.preventDefault();
    this.setState({ 
                    blogs: [...this.state.blogs, this.state.blog],
                    blog: { title:'', body: '', author: '',category:''}
                  },()=>{console.log('adding')});
    // this.titleRef.current.value="";
    // this.bodyRef.current.value="";
    // this.authorRef.current.value="";
    // this.categoryRef.current.value="";
  }

  clearInputs = () => {
     this.setState({user: { name:'', email: '', phone: ''}});
  }

//   showDetails = (i:number) => { //I need to populate the input fields based on the index of the object clicked.
//      console.log(i);
//   }

  render(){
      const {title,body,author,category}=this.state.blog;
    return (
        <div>
            <div>
              <div>
                <span>Title</span>
                <input 
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e)=>{this.changeHandler()}}
                  name={"title"}
                   />
              </div>
              <div>
                <span className="label">Body</span>
                <textarea
                  onChange={(e)=>{this.changeHandler()}}
                  placeholder="Enter body"
                  value={body}
                  name={"body"}
                   />
              </div>
              <div>
                <span className="label">Author</span>
                <input 
                  type="text"
                  placeholder="Enter author"
                  value={author}
                  onChange={(e)=>{this.changeHandler()}}
                  name={"author"}
                   />
              </div>
              <div>
                <span className="label">Category</span>
                <select value={category} name={"category"} onChange={(e)=>{this.changeHandler()}}>
                  <option>React</option>
                  <option>JS</option>
                  <option>CSS</option>
                </select>
              </div>
              <div>
                <button id="submit-btn" onClick={(e)=>{this.onAdd()}}>
                  Save
                </button>
              </div>
            </div>
                <div>
                  {this.blogs.length > 0
                    ? this.blogs.map(({blog}) => (
                        <BlogCard blog={blog}/>
                      ))
                    : <h1>hello</h1>}
                </div>
        </div>
      );
  }
}

export default App;