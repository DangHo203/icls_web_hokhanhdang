import { Route, Routes } from "react-router-dom";

//pages
import Main from "./pages/Main/Main";
import About from "./pages/AboutUs/AboutUs";
import CourseLearning from "./pages/Course/CourseLearning/CourseLearning";
import CareerOpportunities from "./pages/Career/CareerOpportunities";
import ContactPage from "./pages/Contact/Contact";
import SignInPage from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

function App() {
    return (
        <div className="bg-white w-screen h-full overflow-x-hidden">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/course" element={<CourseLearning />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<CareerOpportunities />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
