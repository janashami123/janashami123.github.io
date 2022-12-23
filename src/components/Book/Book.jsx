import React, { useState } from "react";
import "./Book.css";
import { useNavigate } from "react-router-dom";
import Star from "../Reviews/Star";

function Book({ book }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="book-item flex flex-column flex-sb">
        <div className="book-item-img">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
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
          <button onClick={handleClick} className="view-more">
            View Details
          </button>
        </div>
      </div>
      {show && (
        <div className="popup" id="popup-1">
          <div className="overlay"></div>
          <div className="content">
            <button onClick={handleClose} className="close-btn">
              &times;
            </button>

            <div className="book-desc">
              <div className="book-image">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
              </div>
              <div className="book-desc-all">
                <h1>{book.volumeInfo.title}</h1>
                <div className="description-text">
                  <p>{book.volumeInfo.description}</p>
                </div>
                <div className="authors">
                  <span className="text-capitalize fw-7">Author: </span>
                  <span>{book.volumeInfo.authors}</span>
                </div>

                <div className="book-item-info-item publish-year fs-15">
                  <span className="text-capitalize fw-7">Publish Year: </span>
                  <span>{book.volumeInfo.publishedDate}</span>
                </div>
                <div className="stars-desc">
                  <Star stars={book.volumeInfo.averageRating} />
                </div>
                <div className="review-desc">
                  <p>Average Rating : {book.volumeInfo.ratingsCount}</p>
                </div>
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  className="view-more"
                >
                  <button>Book Preview</button>
                </a>
                {book.accessInfo.epub.downloadLink != undefined && (
                  <a href={book.accessInfo.epub.downloadLink} target="_blank">
                    <button className="view-more-download">Download</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
