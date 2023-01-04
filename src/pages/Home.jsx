import React, { useState, useEffect } from "react";
import "../components/Book/Book.css";
import { FaSearch } from "react-icons/fa";
import Book from "../components/Book/Book";
import { styled } from "@mui/system";
import AxiosRequest from "../API/api";
import "./Home.css";
import { Pagination } from "@mui/material";
function Home({ setUser, user }) {
  const [author, setAuthor] = useState("");
  const [startIndex, setstartIndex] = useState(0);
  const [result, setResult] = useState([]);
  const [totalBooks, setTotalBooks] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalBooks / 20);

  const paginate = (event, value) => {
    setpageNumber(value);
    setstartIndex((value - 1) * 20);
    handleClick()
  };

  const handleSignOut = (event) => {
    setUser({});
    window.location.reload();
  };

  const handleChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleClick = () => {
    AxiosRequest(author, startIndex, function (result) {
      setResult(result.items);
      // console.log(startIndex);
      setTotalBooks(result.totalItems);
    });
  };

  useEffect(() => {
    handleClick()
  }, [startIndex]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleClick();
      setstartIndex(0);
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [author]);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      {Object.keys(user).length != 0 && (
        <button className="sign-out" onClick={(e) => handleSignOut(e)}>
          Sign out
        </button>
      )}
      <div className="holder">
        <header>
          <div className="header-content flex flex-c text-center text-white">
            <h2 className="header-title text-capitalize">
              Find your book of choice
            </h2>
            <br />
            <p className="header-text fs-18 fw-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              eos placeat nihil accusamus quidem, nostrum quia? Similique,
              saepe? Molestias culpa nisi eius mollitia eligendi fuga!
            </p>
            <div className="search-form">
              <div className="container">
                <div className="search-form">
                  <div className="search-form-elem flex elx-sb bg-white">
                    <input
                      onChange={handleChange}
                      type="text"
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
              <h1>BOOK SEARCH RESULT</h1>
            )}
          </div>
        </div>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "5rem",
            mt: 5,
            h5:"h5"
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
