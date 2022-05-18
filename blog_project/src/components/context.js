import React from "react";

// Creating the context object and passing the default values.
const BlogsContext = React.createContext({ status: null, login: () => {} });

export default BlogsContext;