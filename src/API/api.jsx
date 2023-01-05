import axios from "axios";

 const axiosRequest=(author,startIndex,callback) =>{
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
          author +
          "&filter=free-ebooks" +
          "&orderBy=newest" +
          "&key=AIzaSyC0UMQMXdcJ92ckPylaYYYHC-G-oukDxeo"+
          `&startIndex=${startIndex}`+'&maxResults=20'
      )
  
      .then((data) => {
          callback(data.data)
      })}
     
    
export default axiosRequest;    