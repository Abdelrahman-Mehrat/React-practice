import { useParams, useHistory } from "react-router-dom";
import UseFetch from "./useFetch";
const BlogDetails = () => {
  const ourId = useParams().id;
  const history = useHistory();
  console.log(ourId);
  const {
    data: blog,
    error,
    isPending,
  } = UseFetch(`http://localhost:8000/blogs/${ourId}`);
  const handleDelete = () => {
    UseFetch(`http://localhost:8000/blogs/${ourId}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      <h2>Blog details {ourId}</h2>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2> <p>Written by {blog.author}</p>{" "}
          <div>{blog.body}</div> <button onClick={handleDelete}></button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
