import { useState } from "react";

function Home(){

    const[blogs,setblogs]=useState(
        [
            {title:"the return of king",author:"amit",id:"1"},
            {title:"the return of demons",author:"amit",id:"2"},
            {title:"the return of rightful king",author:"amit",id:"3"},
            {title:"the return of someone",author:"amit",id:"4"},
            {title:"the return of i dont know",author:"amit",id:"5"}
        ]
    )
    return(
        <div className="home">
            {blogs.map(blog=>(
                <div className="blog-priview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home