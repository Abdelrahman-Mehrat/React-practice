import { useEffect, useState } from "react";
const UseFetch=(url)=>{
    const [data, setData] = useState([]);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
        if(!res.ok){
            throw Error("{error}")
        }
        return res.json()})
        .then((data)=>{
            setData(data) ;
            setIsPending(false);
            setError(null)
        })
        .catch((err)=>{
            setIsPending(false)
            setError(err.message)
        })
    },[])
    const handleDelete = (id) =>{
        const newData = data.filter((blog)=>blog.id !== id);
        setData(newData);
    }
    return(
        {data,isPending,error,handleDelete}
    )
}
export default UseFetch;