import Heder from "./components/Home/Heder";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Registration from "./components/Registration/Registration";
import Librarian from "./components/Librarian/Librarian";
import SerachBook from "./components/Librarian/SerachBook";
import DeleteBook from "./components/Librarian/DeleteBook";
import  AddBook from './components/Librarian/AddBook'
import  Service from './components/Service/Service';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Contact from "./components/Contact/Contact";
import BookIssue from './components/Service/BookIssue'
import BookHistory from './components/Service/BookHistory'
import Bookreturn from  './components/Service/Bookreturn'


const route=createBrowserRouter(
  createRoutesFromElements(
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
      
    </Route>
  )
)


export default function App() {
  return (
    <RouterProvider router={route}/>
  );
}
