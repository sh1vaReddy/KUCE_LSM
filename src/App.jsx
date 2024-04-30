import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from "./components/Home/Loader";
import Layout from './Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Home=lazy(()=>import ("./components/Home/Home"))
const About=lazy(()=>import ("./components/About/About"));
const Registration=lazy(()=>import ("./components/Registration/Registration"));
const Librarian=lazy(()=>import ("./components/Librarian/Librarian"));
const SerachBook =lazy(()=>import("./components/Librarian/SerachBook")); 
const DeleteBook=lazy(()=>import ("./components/Librarian/DeleteBook"));
const AddBook=lazy(()=>import ('./components/Librarian/AddBook'));
const Service =lazy(()=>import ('./components/Service/Service'));
const Contact=lazy(()=>import("./components/Contact/Contact")) ;
const BookIssue=lazy(()=>import('./components/Service/BookIssue')); 
const BookHistory =lazy(()=>import('./components/Service/BookHistory')) 
const Bookreturn =lazy(()=>import('./components/Service/Bookreturn'))  
const Login =lazy(()=>import("./components/Registration/Login"));
const Profile=lazy(()=>import("./components/user/Profile"));
const BookList=lazy(()=>import("./components/Librarian/BookList"));
const Pagenotfound =lazy(()=>import("./components/Home/Pagenotfound")) ;




export default function App() {
  return (
    <>

    <ToastContainer/>
    <BrowserRouter>
    <Suspense fallback={<div><Loader/></div>}>
    <Routes>
    <Route path='/' element={<Layout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='/service' element={<Service/>}/>
     <Route path='/libran' element={<Librarian/>}/>
     <Route path='/libran/add' element={<AddBook/>}/>
     <Route path='/libran/serach' element={<SerachBook/>}/>
     <Route path='/libran/delete' element={<DeleteBook/>}/>
     <Route path='/register' element={<Registration/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/book/issue' element={<BookIssue/>}/>
     <Route path='/book/History' element={<BookHistory/>}/>
     <Route path='/book/return' element={<Bookreturn/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/Book_detsils' element={<BookList/>}/>
     <Route path='/*' element={<Pagenotfound/>}/>
   </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
    
  );
}
