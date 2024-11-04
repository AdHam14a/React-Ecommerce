import { Link } from "react-router-dom";

function Products(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.id} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="fw-bold ">{product.price}$</p>
                  {showButton ? (
                      <Link to={`/product/${product.id}`} className="btn btn-primary">
              Details
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Products;
