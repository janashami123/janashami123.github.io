import React,{useState} from 'react'
import axios from 'axios'
import '../components/Book/Book.css'
import {FaSearch} from 'react-icons/fa';
import Book from '../components/Book/Book';
import { useNavigate } from 'react-router-dom';

import './Home.css'
function Home({setUser,user}) {
 
  const [author,setAuthor]=useState('');
  const[loader,setLoader]=useState(true)
  const[result,setResult]=useState([])
  const[apiKey,setApiKey]=useState('AIzaSyATOdU1Y9RAMtOe5InIMUMEcUM1F1xVWuM')


  const handleChange=(event)=>{
    setAuthor(event.target.value);
    }
    function handleSignOut(event){
      setUser({});
      window.location.reload();
    }

    const handleClick=(event)=>{
     event.preventDefault();


    axios.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:'+author+'&filter=free-ebooks'+'&orderBy=newest'+'&key='+apiKey+'&maxResults=30')
    .then(data=>{

      setResult(data.data.items)
    })
    }
    
    
  return (
    <div >
      {Object.keys(user).length !=0 && 
<button className='sign-out' onClick={(e)=>handleSignOut(e)}>Sign out</button>}
  <div className='holder' >
        <header>
           <div className='header-content flex flex-c text-center text-white' >
            <h2 className='header-title text-capitalize'>Find your book of choice</h2><br/>
            <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos placeat nihil accusamus quidem, nostrum quia? Similique, saepe? Molestias culpa nisi eius mollitia eligendi fuga!</p>
            <div className='search-form' 
 >
      <div className='container'>
       <div className='search-form'>
        <div className='search-form-elem flex elx-sb bg-white'>
            <input onChange={handleChange} type='text' className='form-control' placeholder='Search for author..'/>
            <button onClick={handleClick} type='submit' className='flex flex-c'>
                <FaSearch className='text-purple' size={32}/>
            </button>
        </div>
       </div>
      </div>
    </div>
    </div>
        </header>
        </div>
      <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
         
        </div>  
        <div className='booklist-content grid'>
      
          {result && result.length>0 ?
            result.map((ele, index) => {
            
               return <Book book={ele} key={index} />
              
            })
            :<h1>BOOK SEARCH RESULT</h1>
          }
            
          
        </div>
        
      </div>
    </section>
  
</div>
  )
}

export default Home
