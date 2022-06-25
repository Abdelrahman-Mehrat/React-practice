import BlogList from "./BlogList";
import UseFetch from "./useFetch";
const Home = () => {
  const { data, isPending, error, handleDelete } = UseFetch(
    "http://localhost:8000/blogs"
  );
  console.log(data);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data.length != 0 && (
        <BlogList
          blogs={data}
          handleDelete={handleDelete}
          title={"All Blogs"}
        />
      )}
    </div>
  );
};

export default Home;
