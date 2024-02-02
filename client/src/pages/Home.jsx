import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [sortBy, setSortBy] = useState("name");
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  function updateProducts(data) {
    const { obj: products, total } = data;
    const totalPage = Math.ceil(total / limit);
    setTotalPage(totalPage);
    setProducts(products);
  }
  function getProducts() {
    const token = localStorage.getItem("token");
    dispatch(
      request({
        method: "GET",
        url: `${c.baseUrl}/product?limit=${limit}&page=${page}&sort=${sort}&sortBy=${sortBy}&search=${search}&searchBy=${searchBy}`,
        options: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        isLoader: true,
        // isOk: true,
        callback: updateProducts,
      })
    );
  }
  useEffect(() => {
    getProducts();
  }, [page]);
  function onProductClicked(e, id) {
    e.preventDefault();
    console.log(id);
  }
  return (
    <main>
      <section>
        <div className="📃 💪⬇️">
          <h2 className="👇2">Products</h2>
          <p className="👇4">
            Search and see any products you want here! Edit the inputs and then
            press the search button!
          </p>
          <form className="💪 📏f">
            {/* search */}
            <div className="💪1">
              <label htmlFor="search">Search for product:</label>
              <input
                className="📏f"
                type="text"
                id="search"
                name="search"
                placeholder="Enter search value here"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            {/* searchBy */}
            <div>
              <label htmlFor="searchBy">Search By:</label>
              <select
                id="searchBy"
                name="searchBy"
                onChange={(e) => {
                  setSearchBy(e.target.value);
                }}
                value={searchBy}
              >
                <option value="name">Name</option>
                <option value="sku">SKU</option>
                <option value="description">Description</option>
              </select>
            </div>
            {/* sort */}
            <div>
              <label htmlFor="sort">Sort:</label>
              <select
                id="sort"
                name="sort"
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                value={sort}
              >
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
              </select>
            </div>
            {/* sortBy */}
            <div>
              <label htmlFor="sortBy">Sort By:</label>
              <select
                id="sortBy"
                name="sortBy"
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
                value={sortBy}
              >
                <option value="id">Id</option>
                <option value="sku">SKU</option>
                <option value="name">Name</option>
                <option value="description">Description</option>
                <option value="weight">Weight</option>
                <option value="width">Width</option>
                <option value="length">Length</option>
                <option value="height">Height</option>
                <option value="harga">Harga</option>
                <option value="createdAt">Created At</option>
                <option value="updatedAt">Updated At</option>
              </select>
            </div>
            {/* limit */}
            <div>
              <label htmlFor="limit">Show:</label>
              <input
                type="number"
                id="limit"
                name="limit"
                placeholder={limit}
                value={limit}
                onChange={(e) => {
                  setLimit(e.target.value);
                }}
              />
            </div>
            <button
              className="🛎️ 👆a"
              onClick={(e) => {
                e.preventDefault();
                getProducts();
              }}
            >
              Search
            </button>
          </form>
          {/* pagination buttons */}
          <div className="💪 📏f">
            <button
              className="🛎️"
              onClick={(e) => {
                e.preventDefault();
                // -page
                setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
              }}
            >
              &lt;
            </button>
            <button
              className={`${page === 1 ? "🛎️ a" : "🛎️"}`}
              onClick={(e) => {
                e.preventDefault();
                // page = 1
                setPage(1);
              }}
            >
              1
            </button>
            {/* extra 3 backs */}
            {/* 3rd back */}
            {page - 3 > 1 && <p>...</p>}
            {/* 2nd back */}
            {page - 2 > 1 && (
              <button
                className="🛎️"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page - 2);
                }}
              >
                {page - 2}
              </button>
            )}
            {/* 1st back */}
            {page - 1 > 1 && (
              <button
                className={"🛎️"}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page - 1);
                }}
              >
                {page - 1}
              </button>
            )}
            {/* decor if not on 1 or total page */}
            {page !== 1 && page !== totalPage && (
              <button className="🛎️ a">{page}</button>
            )}
            {/* extra 3 fronts */}
            {/* 1st front */}
            {page + 1 < totalPage && (
              <button
                className={"🛎️"}
                onClick={(e) => {
                  e.preventDefault();
                  // page = 1
                  setPage(page + 1);
                }}
              >
                {page + 1}
              </button>
            )}
            {/* 2nd front */}
            {page + 2 < totalPage && (
              <button
                className="🛎️"
                onClick={(e) => {
                  e.preventDefault();
                  // page = 1
                  setPage(page + 2);
                }}
              >
                {page + 2}
              </button>
            )}
            {/* 3rd front */}
            {page + 3 < totalPage && <p>...</p>}
            <button
              className={`${page === totalPage ? "🛎️ a" : "🛎️"}`}
              onClick={(e) => {
                e.preventDefault();
                // page = totalPage
                setPage(totalPage);
              }}
            >
              {totalPage}
            </button>
            <button
              className="🛎️"
              onClick={(e) => {
                e.preventDefault();
                // +page
                setPage((prevPage) =>
                  prevPage < totalPage ? prevPage + 1 : totalPage
                );
              }}
            >
              &gt;
            </button>
          </div>
          <ProductList
            products={products}
            onProductClicked={onProductClicked}
          />
        </div>
      </section>
    </main>
  );
}
