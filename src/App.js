import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Compontes/About";
import { Home } from "./Compontes/Home";
import { Navbaar } from "./Compontes/Navbaar";
import { Courses } from "./Compontes/Courses";
import { SingUp } from "./Compontes/SingUp";
import { Login } from "./Compontes/Login";
import { Contact } from "./Compontes/Contact";
import CoursesDetails from "./Compontes/CoursesDetails/CoursesDetails";
import Instructor from "./Compontes/Instructor/Instructor";
import InstructorInfo from "./Compontes/InstructorInf/InstructorInfo";
import Cart from "./Compontes/cart/Cart";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbaar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/instinfo" element={<InstructorInfo />} />
            <Route path="/contactdetials" element={<CoursesDetails />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
