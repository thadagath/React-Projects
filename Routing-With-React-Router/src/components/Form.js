import * as React from 'react';
import BlogApp from './BlogApp';


export default class Form extends React.Component{

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
    <BlogApp blog={blog}/>
   </div>
   );
  }
}