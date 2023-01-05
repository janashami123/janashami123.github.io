import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NoInternetConnection from "./components/IntConnection/InternetConn";
import Landing from "./pages/Landing";
import BookViewer from './components/BookViewer/BookViewer'
import Home from '../src/pages/Home'
import { BookResultContext } from "./Contexts/BookResultContext";
function App() {
  const[result,setResult]= useState('')
  const[author,setAuthor]= useState('')
  return (
    <BrowserRouter>
    <NoInternetConnection>
      <BookResultContext.Provider value={{author,setAuthor,result,setResult}}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BookViewer/*" element={<BookViewer />} />
      </Routes>
      </BookResultContext.Provider>
      </NoInternetConnection>
    </BrowserRouter>
  );
}

export default App;
