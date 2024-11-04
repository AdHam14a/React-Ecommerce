import { useEffect, useState } from "react";
import Products from "./Products";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getCatProducts = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center fw-bold p-3">Our products</h2>
      <div className="container">
        <button onClick={() => getProducts()} className="btn btn-info m-3">
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => getCatProducts(cat)}
              className="btn btn-info m-3"
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 mb-4" key={product.id}>
                <Products product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
