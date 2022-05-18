import React, {createRef, useState} from "react";
import ListApp from "./components/ListApp";
import withStorage from "./services/withStorage";
import BlogCard from "./components/BlogCard";

const ListAppWithStorage = withStorage(ListApp);


const App = () => {
  const titleRef = createRef();
  const bodyRef = createRef();
  const authorRef = createRef();
  const categoryRef = createRef();

  const [list,setList]=useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const submitForm = (e) => {
    titleRef.current.value=""
    bodyRef.current.value=""
    authorRef.current.value=""
    categoryRef.current.value=""
  };

  return (
    <div className="form-container">
        <div className="form-fields">
          <div className="field-holder">
            <span className="label">Title</span>
            <input 
              type="text"
              placeholder="Enter title"
              onChange={(e)=>{setTitle(e.target.value)}}
              ref={titleRef} />
          </div>
          <div className="field-holder">
            <span className="label">Body</span>
            <textarea
              onChange={(e)=>{setBody(e.target.value)}}
              placeholder="Enter body"
              ref={bodyRef} />
          </div>
          <div className="field-holder">
            <span className="label">Author</span>
            <input
              type="text"
              placeholder="Enter author"
              onChange={(e)=>{setAuthor(e.target.value)}}
              ref={authorRef} />
          </div>
          <div className="field-holder">
            <span className="label">Category</span>
            <select ref={categoryRef} onChange={(e)=>{setCategory(e.target.value)}}>
              <option>React</option>
              <option>JS</option>
              <option>CSS</option>
            </select>
          </div>
          <div className="field-holder">
            <button id="submit-btn" onClick={(e)=>{submitForm()}}>
              Save
            </button>
          </div>
        </div>
        <ListAppWithStorage blog={blog} >
        {({blogs,remove,edit}) => (
            <div className="list-item">
              {list.length > 0
                ? list.map(({list}) => (
                    <BlogCard list={list}/>
                  ))
                : <h1>hello</h1>}
            </div>
        )}
        </ListAppWithStorage>
    </div>
  );
};

export default App;
