import Product from "./Product/Product";
import {React,useEffect,useState} from "react";

const Products = () => {
  const [count,setcount] = useState(0)
  const [se,sets] = useState(false)
  const handlecount= (v) => {
     setcount(count+v)
  }
  const [data,setdata] = useState([])
  const take = async () => {
    try {
      const res = await fetch("http://localhost:8080/products");
      const datas = await res.json();
      setdata(datas)
    } catch (error) {
      
    }
  }

  useEffect(()=> {
take()
  },[])

  return <div>{data.map((e,i) => <Product count={count} setcount={handlecount} se={se} sets={sets} key={i} product={e}/>)}</div>;
};

export default Products;
