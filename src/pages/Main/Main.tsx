import Header from "../../components/header/Header";
import HeroSection from "./Open/HeroSection";
import ImageSlider from "./Open/ImageSlider";
import ExperiencedInstructors from "./Intructor/ExperiencedInstructors";
import Footer from "../../components/footer/CorporateClients/Footer";
import ServiceCard from "./Service/Service";
import Brands from "./BrandSection/Brands";
import LanguageLearningPage from "./Middle/LanguageLearningPage";
import { ToastContainer } from "react-toastify";

export default function Main() {
    return (
        <div className="w-screen h-auto flex flex-col bg-white overflow-x-hidden">
            <Header />
            <div className="h-[70px]"></div>
            <HeroSection />
            <ImageSlider />
            <LanguageLearningPage />
            <ExperiencedInstructors />
            <ServiceCard />
            <Brands />
            <Footer />
            <ToastContainer />
        </div>
    );
}
