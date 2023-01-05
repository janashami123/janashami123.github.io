import React, { useState, useEffect, useContext } from "react";
import "../components/Book/Book.css";
import { FaSearch } from "react-icons/fa";
import Book from "../components/Book/Book";
import AxiosRequest from "../API/api";
import "./Home.css";
import "../App.css";
import { BookResultContext } from "../Contexts/BookResultContext";
import { Pagination } from "@mui/material";
function Home() {
  const [startIndex, setstartIndex] = useState(0);
  const [totalBooks, setTotalBooks] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);

  const { setResult, result, author, setAuthor } =
    useContext(BookResultContext);

  const totalPages = Math.ceil(totalBooks / 20);

  const paginate = (event, value) => {
    setpageNumber(value);
    setstartIndex((value - 1) * 20);
    handleClick();
  };

  const handleChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleClick = () => {
    AxiosRequest(author, startIndex, function (result) {
      setResult(result.items);
      setTotalBooks(result.totalItems);
    });
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleClick();
      setstartIndex(0);
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [author]);


  return (
    <div>
      <div className="holder">
        <header>
          <div className="header-content flex flex-c text-center text-white">
            <h2 className="header-title text-capitalize">
              Find your book of choice
            </h2>
            <br />
            <p className="header-text fs-18 fw-3"></p>
            <div className="search-form">
              <div className="container">
                <div className="search-form">
                  <div className="search-form-elem flex elx-sb bg-white">
                    <input
                      onChange={handleChange}
                      type="text"
                      defaultValue={author}
                      className="form-control"
                      placeholder="Search for author.."
                    />
                    <button onClick={handleClick} className="flex flex-c">
                      <FaSearch className="text-purple" size={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="booklist">
        <div className="container">
          <div className="section-title"></div>
          <div className="booklist-content grid">
            {result && result.length > 0 ? (
              result.map((ele, index) => {
                return <Book book={ele} key={index} />;
              })
            ) : (
              <h1 className="NoResult">
                There are no books with this author name
              </h1>
            )}
          </div>
        </div>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "5rem",
            mt: 5,
            h5: "h5",
          }}
          count={totalPages}
          page={pageNumber}
          onChange={paginate}
          color="secondary"
          showFirstButton
          showLastButton
        />
      </section>
      <div></div>
    </div>
  );
}

export default Home;
