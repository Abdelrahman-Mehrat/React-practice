import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("yoshi");
const handleSubmit = (e)=>{
    e.preventDefault();
    const blog={title,body,author}
    console.log(blog);
}
    return ( 
        <div className="create">
            <h2>Create Page</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
                <label htmlFor="">Blog author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>                    
                </select>
            <button>Add</button>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>

            </form>
        </div>
     );
}
 
export default Create;