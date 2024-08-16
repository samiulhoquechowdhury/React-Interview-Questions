import React, { useEffect, useState } from "react";
// import "./App.css";

const app = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fecthProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <span>{prod.title}</span>
                <span> Prics: {prod.price}</span>
                <img src={prod.thumbnail} alt={prod.title} />
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disabled"}
            onClick={() => selectedPageHandler(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectedPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              page < products.length / 10 ? "" : "pagination__disabled"
            }
            onClick={() => selectedPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default app;
