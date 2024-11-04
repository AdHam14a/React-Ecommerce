import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./Products";

function ProductDetails() {
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState({});
  useEffect(() => {
    fetch(`${api_url}/${params.productID}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
              <div className="col-4 mb-4">
                <Products product={product} showButton={ false } />
              </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
