import React from "react";
import ContactForm from "./FormContact";
import Header from "../../components/header/Header";
import HeaderContact from "./HeaderContact";
import Footer from "../../components/footer/CorporateClients/Footer";

const ContactPage: React.FC = () => {
    const handleSubmit = (formData: FormData) => {
        // Handle form submission
        console.log(Object.fromEntries(formData));
    };

    return (
        <main className="flex text-3xl font-light text-zinc-500 text-opacity-60">
            <div className="flex overflow-hidden flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex flex-col bg-white max-md:max-w-full">
                    <Header />
                    <HeaderContact />
                    <section className="flex relative flex-col justify-center p-[50px] w-full min-h-[1176px] max-md:px-5 max-md:max-w-full">
                        <ContactForm onSubmit={handleSubmit} />
                    </section>
                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
