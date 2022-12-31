import axios from "axios";

 const axiosRequest=(params,params1,callback) =>{
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
          params +
          "&filter=free-ebooks" +
          "&orderBy=newest" +
          "&key=AIzaSyC0UMQMXdcJ92ckPylaYYYHC-G-oukDxeo"+
          `&startIndex=${params1}`+'&maxResults=20'
      )
  
      .then((data) => {
          callback(data.data)
      })}
     
    
export default axiosRequest;    