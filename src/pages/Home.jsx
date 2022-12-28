import React, { useState, useEffect } from "react";
import "../components/Book/Book.css";
import { FaSearch } from "react-icons/fa";
import Book from "../components/Book/Book";
import Pagination from "../pagination/Pagination";
import  AxiosRequest  from '../API/api';
import "./Home.css";

function Home({ setUser, user }) {
  const [author, setAuthor] = useState("");
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
 // Get current books
 const indexOfLastBook = currentPage * booksPerPage;
 let indexOfFirstBook = indexOfLastBook - booksPerPage;
 const currentBooks = result?.slice(indexOfFirstBook, indexOfLastBook);

  //paginate change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  indexOfFirstBook=indexOfFirstBook+1;

  const handleSignOut = (event) => {
    setUser({});
    window.location.reload();
  };
  const handleChange = (e) => {
    setAuthor(e.target.value);
  };
  
  const handleClick = () => {
   AxiosRequest(author,function(result){
   setResult(result)
   });
  };





  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleClick();
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
            {currentBooks && currentBooks.length > 0 ? (
              currentBooks.map((ele, index) => {
                return <Book book={ele} key={index} />;
              })
            ) : (
              <h1>BOOK SEARCH RESULT</h1>
            )}
          </div>
        </div>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={result?.length}
          paginate={paginate}
        />
      </section>
      <div></div>
    </div>
  );
}

export default Home;
