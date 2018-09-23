import React from "react";

const BlogList = props => {
    return (
        <div style = {style.bloglist}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    )
}

const style = {
    bloglist: {
        margin: 25,
        textAlign: "justify",
        backgroundColor: "#FFDAB9"
        
    }
    
}


export default BlogList;