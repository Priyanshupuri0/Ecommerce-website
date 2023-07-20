import React, { useEffect, useState, useRef } from "react";
import M_navbar from "./M_navbar";
import styles from "./MainComponent.css";
import SpinComponent from "./Spin.js";
import { Pagination } from "antd";
import { Tooltip } from "antd";


const MainComponent = () => {
  const [data, setData] = useState();
  const productsPerPage = 15; // Set the number of products per page
  const [currentPage, setCurrentPage] = useState(1);

  const isDataFetched = useRef(false); // Ref to track if data is already fetched

  const handleClick = (e) => {
    e.target.style.fontSize = "1rem";
    e.target.style.color = "red";
    const icon = e.target.classList[1];
    if (icon === "fa-thumbs-up") {
      e.target.style.color = "green";
    }
  };

  useEffect(() => {
    if (!isDataFetched.current) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://dummyjson.com/products?limit=100"
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await response.json();
          setData(json);
          isDataFetched.current = true; // Mark data as fetched
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, []);

  const totalPages = data
    ? Math.ceil(data.products.length / productsPerPage)
    : 0;

  useEffect(() => {
    const ratingContainers = document.querySelectorAll(".ratings");

    ratingContainers.forEach((container) => {
      const rating = parseFloat(container.dataset.rating);

      if (!isNaN(rating) && rating >= 0 && rating <= 5) {
        container.style.setProperty("--rating", rating);
      } else {
        container.innerHTML = "Rating not available";
      }
    });
    return () => {
      ratingContainers.forEach((container) => {
        container.style.removeProperty("--rating");
        container.innerHTML = "";
      });
    };
  }, [data]);

  // Slice the products array based on the current page and products per page

  const displayedProducts =
    data && data.products
      ? data.products.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
      : [];

  const handlePagination = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {<M_navbar/>}
      <h1>This is main component</h1>
      <div className="product-container">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
            <div className="product-box" key={index}>
              <span className="span-icon">
                <Tooltip title="Like">
                  <i className="far fa-thumbs-up" onClick={handleClick}></i>
                </Tooltip>
                <Tooltip title="Dislike">
                  <i className="far fa-thumbs-down" onClick={handleClick}></i>
                </Tooltip>
              </span>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">Rs. {product.price}</p>
              <div className="ratings" data-rating={product.rating}></div>
              <div className="product-buttons">
                <button className="btn btn-primary btn-bn">Buy Now</button>
                <button className="btn btn-secondary btn-ac">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <SpinComponent />
        )}
      </div>
      {totalPages > 1 && (
        <div className="pagination d-flex justify-content-center">
          <Pagination
            current={currentPage}
            total={data.products.length}
            pageSize={productsPerPage}
            onChange={handlePagination}
            hideOnSinglePage={true}
            onShowSizeChange={handlePagination}
          />
        </div>
      )}
    </div>
  );
};

export default MainComponent;
