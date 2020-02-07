

//UseReducer
import React,{useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state,action) => {

    switch(action.type){
        case 'add_blogpost':
            return [...state,{title: `Blog Post ${state.length + 1}`}]

        default: 
            return state;
    }


}

export const BlogProvider = ({children}) =>{

    const [blogPosts,dispatch] = useReducer(blogReducer,[{title: `Blog Post`}]);


    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'})
    }

   


    return ( <BlogContext.Provider
    value={{data:blogPosts,addBlogPost}}
    > 
         {children} 
         </BlogContext.Provider>
         )
};
export default BlogContext;





//UseState
// import React,{useState} from 'react';

// const BlogContext = React.createContext();

// export const BlogProvider = ({children}) =>{

//     const [blogPost,setBlogPost] = useState([]);

//     const addBlogPost = () => {
//         setBlogPost([...blogPost,{title: `Blog no ${blogPost.length + 1}`}])

//     }



//     return ( <BlogContext.Provider
//     value={{data:blogPost,addBlogPost}}
//     > 
//          {children} 
//          </BlogContext.Provider>
//          )
// };
// export default BlogContext;