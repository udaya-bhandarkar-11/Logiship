import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Login } from "./components";
import{ About, Contact, Experience, Feedbacks, Hero, Navbar,Home, Tech, Works, StarsCanvas} from './components';

const App =() => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/Owner" element={<Login />} />
      

    </Routes>
    </BrowserRouter>
  )
}
 const app=() => {
   return (
      <div className='h-screen w-full bg-cover bg-center bg-fixed bg-'>
       
<Login/>
       
      </div>
   )
   
 }
 


export default App;
