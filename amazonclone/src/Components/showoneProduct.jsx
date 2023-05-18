import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addtoCart } from "../Features/Cart/action";

export const ShowOneProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    const getoneProduct = async () => {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      setProduct(await response.json());
    };
    getoneProduct();
  }, []);
  // const addsProduct = (product) => {
  //   dispatch(addtoCart(product));
  //   console.log("dgdfgfeuy");
  // };

  return (
    <div>
      <img src={product.img} alt="" />
      <h1>{product.title}</h1>
      <p>{product.descr}</p>
      <button
        style={{
          backgroundColor: "#febd69",
          width: "200px",
          height: "50px",
          marginBottom: "5%",
        }}
        onClick={() => {
          dispatch(addtoCart(product));
          console.log(product, "fff");
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};
