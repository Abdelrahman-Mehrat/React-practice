import BlogList from "./BlogList";
import UseFetch from "./useFetch";
const Home = () => {
   
      const {data,isPending,error,handleDelete} = UseFetch("http://localhost:8000/blogs")
    return ( 
        <div className="home"> 
        {error && <div>wrong</div>}
        {isPending && <div>Loading...</div> }
        {data && <BlogList blogs={data} handleDelete={handleDelete} title={"All Blogs"}/>}
        </div>
     );
}
 
export default Home;