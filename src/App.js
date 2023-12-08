import './App.css';
import Home from './Home/Home';
import image from "./Icons/photo_2023-12-01_17-16-44.jpg";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./Sign In";
import SignUp from "./Sign Up";
import Page from './404Page';

function App() {
  return (

      <div className="more"
           style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

          <BrowserRouter>

              <Routes>
                  <Route path="/Home" element={<Home></Home>}></Route>
                  <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
                  <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
                  <Route path="/404" element={<Page></Page>}></Route>



              </Routes>


          </BrowserRouter>

      </div>
)
    ;
}

export default App;
