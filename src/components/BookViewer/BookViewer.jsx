import React from 'react'
import './BookViewer.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
const BookViewer = () => {

    const location =useLocation();   
    const id=location.state?.id;    
    console.log()
  return(
    <div>
      <Link to="/Home">
    <button className='BackButton'><FaArrowLeft/></button></Link>
    <iframe id="viewerCanvas" srcDoc={`
    <script type="text/javascript" src="//books.google.com/books/previewlib.js"></script>
    <script type="text/javascript">
      GBS_insertEmbeddedViewer('${id}',800,1000)
    </script>
    `}
    style={{width: '100rem',
    heigth:100000}}>
      
   </iframe>
   </div>
  )
 }
//     const ISBN_num = location.state?.id
//     const canvasRef = useRef() 
    
//     // Initialize loaded state as false
//     const [loaded, setLoaded] = useState(false);  
    
//     // Create alert message if book not found in Google Database
//     function alertNotFound() {            
//         alert("could not embed the book!");
//      }
//     // Add a Google Books script tag and event listener if the tag has loaded
//     useEffect(()=> {      
//        const scriptTag = document.createElement('script')                
//        scriptTag.src= 'https://www.google.com/books/jsapi.js'       
//        scriptTag.addEventListener('load', ()=>setLoaded(true))       
//        scriptTag.id = "google-script"      
//        document.body.appendChild(scriptTag);       
//      }, []);      
//     // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
//     useEffect(()=>{            
//         if (!loaded) return             
//         else{         
//              if(window.viewer){            
//                 let viewer = new window.google.books.DefaultViewer
//                 (canvasRef.current); 
//                 viewer.load('ISBN:'+ ISBN_num, alertNotFound);                    
//               }        
//               else{          
//                 window.google.books.load()                             
//                 window.google.books.setOnLoadCallback(() => {                 
//                 let viewer = new window.google.books.DefaultViewer      
//                     (canvasRef.current);         
//                 window.viewer = viewer         
//                 viewer.load('ISBN:'+ ISBN_num, alertNotFound);        
//               })
//             }              
//         }}, [loaded])      
//         return (      
//            <div className='Embedded'>   
           
//                {loaded ?             
//                     <div>                
//                        <div ref={canvasRef} id="viewerCanvas"></div>            
//                     </div> : 
//                'Script not loaded'}      
//            </div>    )
//  ;}
 export default BookViewer