import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Login,WLog } from "./components";
import{ About, Contact, Experience, Feedbacks, Hero, Navbar,Home, Tech, Works, StarsCanvas} from './components';

const App =() => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/Owner" element={<Login />} />
      <Route path="/Warehouse" element={<WLog />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
