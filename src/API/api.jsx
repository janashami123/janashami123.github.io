import axios from "axios";

 const axiosRequest=(params) =>{
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
          params +
          "&filter=free-ebooks" +
          "&orderBy=newest" +
          "&key=AIzaSyC0UMQMXdcJ92ckPylaYYYHC-G-oukDxeo"+
          "&maxResults=40"
      )
  
      .then((data) => {
        return data.data.items;
   
      })}

export default axiosRequest;    