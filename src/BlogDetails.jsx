import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogDetails = () => {
    const ourId = useParams().id   ;
     console.log(ourId);
     const {data:blog,error,isPending} = UseFetch(`http://localhost:3000/blogs/${ourId}`)
    return ( 
        <div className="blog-details">
            <h2>Blog details {ourId}</h2>
            {isPending && <div>loading...</div> }
            {error && <div>{error}</div>}
            {blog && (
                <article><h2> {blog.title}</h2> <p>Written by {blog.author}</p> <div>{blog.body}</div> </article>
            )}
   
        </div>
     );
}
 
export default BlogDetails;