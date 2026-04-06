import { useState, useEffect } from "react";

export default function useEffect(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
         const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data || result);
      } catch (error) {
        setError(error); 
      }
      finally{
        setLoading(false);
      } 
    };

    fetchData();
  }, [url]);
  return ({data, error, loading}); 
}