import React, { useState,useContext } from "react";
import "./Book.css";
import { useNavigate,useParams } from "react-router-dom";
import Star from "../Reviews/Star";
import { Link } from "react-router-dom";
import { BookResultContext } from "../../Contexts/BookResultContext"
function Book({ book }) {


  const [show, setShow] = useState(false);
  const{setResult,result}=useContext(BookResultContext)  
  console.log(result)
  return (
    <div>
      <div className="book-item flex flex-column flex-sb">
        <div className="book-item-img">
          <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="book" />
        </div>

        <div className="book-item-info text-center">
         
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{book.volumeInfo.title}</span>
          </div>

          <div className="book-item-info-item author fs-15">
            <span className="text-capitalize fw-7">Publisher: </span>
            <span>{book.volumeInfo.publisher}</span>
          </div>

          <div className="book-item-info-item edition-count fs-15">
            <span className="text-capitalize fw-7">Author: </span>
            <span>{book.volumeInfo.authors}</span>
          </div>

          <div className="book-item-info-item publish-year fs-15">
            <span className="text-capitalize fw-7">Publish Year: </span>
            <span>{book.volumeInfo.publishedDate}</span>
          </div>
          <div className="stars">
            <Star stars={book.volumeInfo.averageRating} />
          </div>
          <Link to='/BookViewer' state={{id:book.id}}>
          <button className="view-more">
            View Details
          </button>
          </Link>
        </div>
      </div>

     
    </div>
  );
}

export default Book;
