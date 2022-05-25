import React from "react";
import Home from "./components/Home"
import Form from "./components/Form";
import BlogApp from "./components/BlogApp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout,Icon } from "antd";


const App = () => {
  return (
    <Router>
        <div class="page-container">

<div class="nav">
    <nav>
        <div class="logo">
            <div class="title">
                Blogger App
            </div>
        </div>
        <ul>
            <li class="active">
            <Link to="/">
                  <Icon type="home" />
                  Home
                </Link>            
            </li>
            <li>
            <Link to="/Form">
                  <Icon type="edit" />
                    New Blogs
                </Link>            </li>
            <li>
            <Link to="/BlogApp">
                  <Icon type="fire" />
                  Blogs
                </Link>            </li>
        </ul>
    </nav>
    <Layout className="content-box">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Form">
              <Form/>
            </Route>
            <Route path="/BlogApp">
              <BlogApp />
            </Route>
          </Switch>
        </Layout>

</div>
</div>
</Router>
  )}
export default App;
